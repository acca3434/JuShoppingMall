const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // id : 포스트 아이디
        post_id: {
          // 올린유저
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        post_title: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        post_title: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        post_content: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Post",
        tableName: "posts",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // belongsTo 함수를 사용해서 User 테이블과 연결 이 테이블이 자식
    // belongsTo 첫번째 매개변수는 연결될 테이블 이름
    // 유저의 id가 타겟이고 연결주는 키는 user_id다.
    db.Post.belongsTo(db.User, { foreignKey: "post_id", targetKey: "user_id" });
    db.Post.hasMany(db.Reply, { foreignKey: "reply_id", sourceKey: "id" });
  }
}

module.exports = Post;
