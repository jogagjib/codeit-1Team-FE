import closelIcon from "./assets/엑스_버튼_4x.png";
import registerBtnImg from "./assets/댓글등록하기_버튼_4x.png";
import LabelInput from "./LabelInput";
import "./CommentRegisterModal.css";
import { useEffect } from "react";

function CommentRegisterModal({ closeCommentRegisterModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 모달 열릴 때 스크롤 막기
    return () => {
      document.body.style.overflow = "auto"; // 모달 닫힐 때 스크롤 복구
    };
  }, []);

  const clickedCommentRegisterModalClose = () => {
    closeCommentRegisterModal();
  };

  return (
    <div className="CommentRegisterModal-Background">
      <div className="modalContainer-CommentRegister">
        <img
          className="closeCommentRegisterModalBtn"
          src={closelIcon}
          alt={"댓글 등록창 나가기 버튼"}
          onClick={clickedCommentRegisterModalClose}
        />
        <div className="modalTitle-commentRegister">댓글 등록</div>
        <div className="ncikName-commentRegister">
          닉네임
          <div className="inputNickname">
            <LabelInput placeholder="닉네임을 입력해 주세요" type="text" />
          </div>
        </div>
        <div className="inputComment-commentRegister">
          댓글
          <div className="inputComment">
            <LabelInput type="textarea" placeholder="댓글을 입력해 주세요" />
          </div>
        </div>
        <div className="password-commentRegister">
          비밀번호
          <div className="inputPassword">
            <LabelInput
              type="textarea"
              placeholder="비밀번호를 입력해 주세요"
            />
          </div>
        </div>
        <img
          className="registerBtn-commentRegister"
          src={registerBtnImg}
          alt="댓글 등록하기 버튼"
        ></img>
      </div>
    </div>
  );
}

export default CommentRegisterModal;
