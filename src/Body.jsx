import postImage from "./assets/추억상세페이지_이미지.png";
import commentEnrollBtnIcon from "./assets/댓글등록하기_버튼_4x.png";
import "./Body.css";
import { useState } from "react";
import CommentRegisterModal from "./CommentRegisterModal";

function Body() {
  const [isCommentRegisterModalOpen, setCommentRegisterModalOpen] =
    useState(false);

  return (
    <div className="MemoryDetail_Body">
      <img
        className="postImg"
        src={postImage}
        alt={"인천앞바다에서 낚은 월척 이미지"}
      />
      <div className="postContent">
        <p>
          인천 앞바다에서 월척을 낚았습니다!
          <br />
          가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에 오래도록
          남을 멋진 하루였어요 가
          <br />
          족들과 기억에 오래도록 남을 멋진 하루였어요
        </p>

        <p>
          인천 앞바다에서 월척을 낚았습니다!
          <br />
          가족들과 기억에 오래도록 남을 멋진 하루였어요
        </p>

        <p>인천 앞바다에서 월척을 낚았습니다!</p>
        <br />
      </div>
      <img
        className="commentEnrollBtn"
        src={commentEnrollBtnIcon}
        alt={"댓글 등록하기 버튼"}
        onClick={() => setCommentRegisterModalOpen(true)}
      />

      {isCommentRegisterModalOpen && (
        <CommentRegisterModal
          closeCommentRegisterModal={() => setCommentRegisterModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Body;
