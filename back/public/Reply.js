const Sequelize = require("sequelize");

class Reply extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        reply_id: {
          // 게시글 번호(연결시킬거임)
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        reply_user_id: {
          // 댓글 단 유저 이름
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        reply_content: {
          // 댓글 내용
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Reply",
        tableName: "replys",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // belongsTo 함수를 사용해서 User 테이블과 연결 이 테이블이 자식
    // belongsTo 첫번째 매개변수는 연결될 테이블 이름
    // 유저의 id가 타겟이고 연결주는 키는 user_id다.
    db.Reply.belongsTo(db.Post, {
      foreignKey: "reply_id",
      targetKey: "id",
    });
  }
}

module.exports = Reply;
