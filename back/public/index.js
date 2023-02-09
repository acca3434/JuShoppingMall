// 설치해야할것
// sequelize,mysql2 둘 다 설치

const Sequelize = require("sequelize");
const config = require("../config.json");
const User = require("./User");
const Product = require("./Product");
const Post = require("./Post");
const Reply = require("./Reply");
const Cart = require("./Cart");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  process.env.DATABASE_PASSWORD,
  config.development
);

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Product = Product;
db.Post = Post;
db.Reply = Reply;
db.Cart = Cart;

User.init(sequelize);
Product.init(sequelize);
Post.init(sequelize);
Reply.init(sequelize);
Cart.init(sequelize);

User.associate(db);
Product.associate(db);
Post.associate(db);
Reply.associate(db);
Cart.associate(db);

module.exports = db;
