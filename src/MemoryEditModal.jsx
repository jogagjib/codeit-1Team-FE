import { useEffect } from "react";
import closelIcon from "./assets/엑스_버튼_4x.png";
import "./MemoryEditModal.css";
import LabelInput from "./LabelInput";
import editBtnImg from "./assets/수정하기_버튼_4x.png";
import verticalImg from "./assets/세로선_4x.png";

function MemoryEditModal({ closeEditModal }) {
  // 🔹 모달 크기 조절 함수 추가
  const adjustModalScale = () => {
    const baseWidth = 1120; // 기준 너비
    const baseHeight = 794; // 기준 높이

    const screenWidth = window.innerWidth; // 현재 화면 너비
    const screenHeight = window.innerHeight; // 현재 화면 높이

    // 가로, 세로 중 작은 비율을 선택 (모달이 비율 유지하며 줄어들도록)
    const scaleWidth = screenWidth / baseWidth;
    const scaleHeight = screenHeight / baseHeight;
    const scaleFactor = Math.min(scaleWidth, scaleHeight, 1); // 최대 1배(100%)까지만 확대

    const modal = document.querySelector(".modalContainer-Edit");
    if (modal) {
      modal.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; // 모달 열릴 때 스크롤 막기

    // 🔹 모달 크기 조정 실행
    adjustModalScale();
    window.addEventListener("resize", adjustModalScale); // 화면 크기 변경 시 적용

    return () => {
      document.body.style.overflow = "auto"; // 모달 닫힐 때 스크롤 복구
      window.removeEventListener("resize", adjustModalScale); // 이벤트 해제
    };
  }, []);

  const clickedEditModalClose = () => {
    closeEditModal();
  };

  return (
    <div className="EditModal-Background">
      <div className="modalContainer-Edit">
        <img
          className="closeEditModalBtn"
          src={closelIcon}
          alt="추억 수정하기창 나가기 버튼"
          onClick={clickedEditModalClose}
        />
        <div className="modalTitle">추억 수정</div>

        {/* 왼쪽 영역 */}
        <div className="leftSection">
          <div className="nickname-editModal">
            닉네임
            <div className="inputNickname">
              <LabelInput placeholder="닉네임을 입력해 주세요" type="text" />
            </div>
          </div>
          <div className="postTitle-editModal">
            제목
            <div className="inputTitle">
              <LabelInput placeholder="제목 입력해 주세요" type="text" />
            </div>
          </div>
          <div className="postImage-editModal">
            이미지
            <div className="inputImage">
              <LabelInput placeholder="파일을 선택해 주세요" type="file" />
            </div>
          </div>
          <div className="postContent-editModal">
            본문
            <div className="inputContent">
              <LabelInput placeholder="본문 내용을 입력해 주세요" type="text" />
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <img className="verticalLine" src={verticalImg} alt="세로 구분선" />

        {/* 오른쪽 영역 */}
        <div className="rightSection">
          <div className="postTag-editModal">
            태그
            <div className="inputTag">
              <LabelInput placeholder="태그 입력 후 Enter" type="text" />
            </div>
          </div>
          <div className="postPlace-editModal">
            장소
            <div className="inputPlace">
              <LabelInput placeholder="장소를 입력해 주세요" type="text" />
            </div>
          </div>
          <div className="postMoment-editModal">
            추억의 순간
            <div className="inputMoment">
              <LabelInput
                placeholder="추억의 순간을 입력해 주세요"
                type="text"
              />
            </div>
          </div>
          <div className="postStatus-editModal">
            추억 공개 선택
            <div className="statusOpen">공개</div>
            <input className="checkbox" type="checkbox" />
          </div>
          <div className="editAuthorityPass-editModal">
            수정 권한 인증
            <div className="inputPassword">
              <LabelInput
                placeholder="비밀번호를 입력해주세요"
                type="password"
              />
            </div>
          </div>
          <img
            className="editMemoryBtn"
            src={editBtnImg}
            alt="추억 수정하기 버튼"
          />
        </div>
      </div>
    </div>
  );
}

// ✅ export default는 return 블록이 끝난 후!
export default MemoryEditModal;
