const Sequelize = require("sequelize");

class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        product_id: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        product_name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        product_content: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        product_price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        product_image: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Product",
        tableName: "products",
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
    db.Product.hasMany(db.Cart, {
      foreignKey: "product_index",
      sourceKey: "id",
    });
  }
}

module.exports = Product;
