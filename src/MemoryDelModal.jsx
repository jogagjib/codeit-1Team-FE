import { useEffect } from "react";
import closelIcon from "./assets/엑스_버튼_4x.png";
import "./MemoryDelModal.css";
import LabelInput from "./LabelInput";
import delBtnImg from "./assets/삭제하기버튼_4x.png";

function MemoryDelModal({ closeDelModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 모달 열릴 때 스크롤 막기
    return () => {
      document.body.style.overflow = "auto"; // 모달 닫힐 때 스크롤 복구
    };
  }, []);

  const clickedDelModalClose = () => {
    closeDelModal();
  };

  return (
    <div className="DelModal-Background">
      <div className="modalContainer-Delete">
        <img
          className="closeDelModalBtn"
          src={closelIcon}
          alt={"추억 삭제하기창 나가기 버튼"}
          onClick={clickedDelModalClose}
        />
        <div className="modalTitle-memoryDelete">추억 삭제</div>
        <div className="delAuthorityPass">삭제 권한 인증</div>
        <div className="inputPassword">
          <LabelInput placeholder="비밀번호를 입력해주세요" type="password" />
          <img
            className="delMemoryBtn"
            src={delBtnImg}
            alt="추억 삭제하기 버튼"
          />
        </div>
      </div>
    </div>
  );
}

export default MemoryDelModal;
