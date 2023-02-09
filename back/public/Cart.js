const Sequelize = require("sequelize");

class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // id : 카트 고유의 인덱스
        cart_id: {
          // 실제 유저 아이디(닉네임)이랑 연결할것
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        product_index: {
          // 실제 상품 아이디
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cart_name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        cart_quantity: {
          // 담은 물건 수량
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cart_price: {
          // 담은 장바구니 가격
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cart_image: {
          // 카트 이미지
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Cart",
        tableName: "carts",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // 1:N 관계 (hasMany, belongsTo)
    // 시퀄라이즈에서 1:N 관계를 hasMany 함수로 정의를 한다.
    // hasMany 함수를 이용해서 테이블의 관계를 정의해준다.
    // 첫번째 매개변수로 연결할 테이블
    // sourceKey User테이블안에 무슨 키를 foreignKey와 연결할지
    // hasMany()첫번째로 넘겨준 테이블이 foreignKey 연결되고 foreignKey 이름은 user_id다.
    db.Cart.belongsTo(db.User, {
      foreignKey: "cart_id",
      targetKey: "user_id",
    });
    db.Cart.belongsTo(db.Product, {
      foreignKey: "product_index",
      targetKey: "id",
    });
  }
}

module.exports = Cart;
