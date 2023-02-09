const dot = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const jwt = require("jsonwebtoken");
const session = require("express-session");
const bcrypt = require("bcrypt");
const { sequelize, User, Product, Post, Reply, Cart } = require("./public");

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("연결이 잘됐다");
  })
  .catch((err) => {
    console.log(err);
  });

const options = {
  origin: "http://localhost:3000",
};

app.use(cors(options));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// 전달받은객체 형태를 해석해서 사용할 수 있게 설정
app.use(express.json());

app.get("/", async (req, res) => {});

app.post("/", async (req, res) => {
  const { sessionKey } = req.body;
  console.log(sessionKey);
  jwt.verify(sessionKey, process.env.JU_ACCESS_TOKEN, async (err, decoded) => {
    if (err) {
      const aleadyUser = null;
      res.send(aleadyUser);
    }
    if (decoded) {
      const users = await User.findOne({
        where: {
          access_token: sessionKey,
        },
      }).then((data) => {
        const aT = jwt.sign(
          {
            password: data.user_pw,
          },
          process.env.JU_ACCESS_TOKEN,
          {
            expiresIn: "1d",
          }
        );
        const rT = jwt.sign(
          {
            password: data.user_pw,
          },
          process.env.JU_REFRESH_TOKEN,
          {
            expiresIn: "1d",
          }
        );
        Promise.all([data, aT]).then((data) => {
          res.send(data);
        });
      });
    }
  });
});

app.post("/signIn", async (req, res) => {
  let { signInIdinput, signInPwinput } = req.body;

  const users = await User.findOne({
    where: { user_id: signInIdinput },
  }).then((data) => {
    bcrypt.compare(signInPwinput, data?.user_pw, (err, same) => {
      if (same) {
        const aT = jwt.sign(
          {
            password: data.user_pw,
          },
          process.env.JU_ACCESS_TOKEN,
          {
            expiresIn: "1d",
          }
        );
        const rT = jwt.sign(
          {
            password: data.user_pw,
          },
          process.env.JU_REFRESH_TOKEN,
          {
            expiresIn: "1d",
          }
        );
        console.log(aT);
        data.update(
          {
            access_token: aT, //
            refresh_token: rT,
          },
          {
            where: {
              user_id: signInIdinput,
            },
          }
        );
        Promise.all([data, aT, rT]).then((data) => {
          res.send(data);
          // res.send({ data:data[0], aT:data[1], rT:data[2] });
        });
      } else if (!same) {
        const aleadyUser = null;
        res.send(aleadyUser);
      }
    });
  });
});

app.post("/signUp", async (req, res) => {
  const { signUpIdinput, signUpPwinput, signUpNameinput } = req.body;

  const users = await User.findOne({
    where: { user_id: signUpIdinput },
  });
  if (users) {
    console.log("회원이 있다면");
    const aleadyUser = "회원이 이미 있습니다";
    res.send(aleadyUser);
  } else if (!users) {
    console.log("회원이 없다면");
    bcrypt.hash(signUpPwinput, 10, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        User.create({
          user_id: signUpIdinput,
          user_pw: data,
          user_name: signUpNameinput,
          refresh_token: 0,
          access_token: 0,
        }).then((data) => {
          res.send(data);
        });
      }
    });
  }
});

app.get("/postsData", async (req, res) => {
  const posts = await Post.findAll();
  res.send(posts);
});

app.post("/postsUpdate", async (req, res) => {
  const { idData, userIdData, titleData, bodyData } = req.body;

  const posts = await Post.update(
    { post_title: titleData, post_content: bodyData },
    {
      where: {
        id: idData,
        post_id: userIdData,
      },
    }
  );
  res.send(posts);
});

app.post("/postsDelete", (req, res) => {
  const { idData, userIdData } = req.body;

  Post.destroy({
    where: {
      id: idData,
      post_id: userIdData,
    },
    force: true,
  }).catch(() => {
    res.send("2");
  });
  res.send("1");
});

app.get("/productionData", async (req, res) => {
  const production = await Product.findAll();
  res.send(production);
});

app.post("/replyData", async (req, res) => {
  // 게시판인덱스,게시판작성자이름
  const { id } = req.body;
  const reply = await Reply.findAll({
    where: {
      reply_id: id,
    },
  });
  if (reply) {
    res.send(reply);
  }
  if (!reply) {
    res.send(null);
  }
});

app.post("/cartsData", async (req, res) => {
  // 게시판인덱스,게시판작성자이름
  const { userSignInInfor } = req.body;

  console.log(userSignInInfor.sessionId);
  console.log(userSignInInfor.sessionPw);
  const reply = await Cart.findAll({
    where: {
      cart_id: userSignInInfor.sessionId,
    },
  });
  if (reply) {
    res.send(reply);
  }
  if (!reply) {
    res.send(null);
  }
});

app.post("/userCartsDataUpdate", async (req, res) => {
  // 게시판인덱스,게시판작성자이름
  const { value, userSignInInfor } = req.body;
  console.log(value);
  console.log(userSignInInfor);
  const reply = await Cart.findOne({
    where: {
      cart_id: userSignInInfor.sessionId,
      cart_name: value.product_name,
    },
  }).then((data) => {
    if (data) {
      console.log(data
        );
      // 이미 있는 물건이라면?
      Cart.update(
        {
          cart_quantity: data.cart_quantity + 1,
        },
        {
          where: {
            cart_id: userSignInInfor.sessionId,
            cart_name: value.product_name,
          },
        }
      ).then(() => {
        res.end();
      });
    }
    if (!data) {
      // 장바구니에 없는 물건이라면
      Cart.create({
        cart_id: userSignInInfor.sessionId,
        product_index: value.id,
        cart_name: value.product_name,
        cart_quantity: 1,
        cart_price: value.product_price,
        cart_image: value.product_image,
      }).then(() => {
        res.end();
      });
    }
  });
});

const server = app.listen(process.env.PORT, () => {
  console.log("서버 열림");
});
