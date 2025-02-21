import jogagjibLogo from "./assets/조각집_로고.png";
import sympathyIcon from "./assets/조각집꽃_64.png";
import commentIcon from "./assets/댓글_아이콘_64x.png";
import sympathyBtn from "./assets/공감보내기_버튼_3x.png";
import headerHorizon from "./assets/수평선.png";
import "./Header.css";
import { useState } from "react";
import MemoryDelModal from "./MemoryDelModal";
import MemoryEditModal from "./MemoryEditModal";

function Header() {
  const [isDelModalOpen, setDelModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  return (
    <div className="MemoryDetail_Header">
      {/* 조각집 상단 로고 */}
      <img className="jogagjibLogo" src={jogagjibLogo} alt={"조각집 로고"} />
      <div className="Header">
        <div className="userInfo">
          <span className="nickName">달봉이아들</span>
          <span className="divison">|&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="postStatus">공개</span>
        </div>
        <span className="memoryEdit" onClick={() => setEditModalOpen(true)}>
          추억 수정하기
        </span>
        <span className="memoryDelete" onClick={() => setDelModalOpen(true)}>
          추억 삭제하기
        </span>
        <div className="postInfo">
          <div className="postTitle">
            인천 앞바다에서 무료 60cm 월척을 낚다!
          </div>
          <div className="postHashtag">
            <span className="tag1">#인천</span>
            <span className="tag2">#낚시</span>
          </div>
          <span className="postPlace">인천 앞바다</span>
          <span className="postDate">
            ·&nbsp;&nbsp;24.01.19&nbsp;&nbsp;18:00
          </span>
          <img
            className="sympathyIcon"
            src={sympathyIcon}
            alt={"공감 아이콘"}
          ></img>
          <span className="sympathyCount">120</span>
          <img
            className="commentIcon"
            src={commentIcon}
            alt={"댓글 아이콘"}
          ></img>
          <span className="commentCount_Header">8</span>
        </div>
        <img
          className="sympathyBtn"
          src={sympathyBtn}
          alt={"공감 보내기 버튼"}
        ></img>
        <img className="headerHorizon" src={headerHorizon} alt={"수평선"}></img>
      </div>

      {isDelModalOpen && (
        <MemoryDelModal closeDelModal={() => setDelModalOpen(false)} />
      )}

      {isEditModalOpen && (
        <MemoryEditModal closeEditModal={() => setEditModalOpen(false)} />
      )}
    </div>
  );
}

export default Header;
