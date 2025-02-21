import footerHorizon from "./assets/수평선.png";
import editIcon from "./assets/댓글수정_아이콘.png";
import delIcon from "./assets/댓글삭제_아이콘.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="MemoryDetail_Footer">
      <div className="commentCount_Footer">댓글 8</div>
      <img className="footerHorizon" src={footerHorizon} alt={"수평선"}></img>
      <div className="comment1">
        <span className="userNickname">다람이네가족</span>
        <span className="commentedAt">24.01.18 21:50</span>
        <div className="commentText">
          {"우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~"}
        </div>
        <img
          className="commentEditIcon"
          src={editIcon}
          alt={"댓글 수정 아이콘"}
        ></img>
        <img
          className="commentDelIcon"
          src={delIcon}
          alt={"댓글 삭제 아이콘"}
        ></img>
        <img
          className="commentHorizon"
          src={footerHorizon}
          alt={"수평선"}
        ></img>
      </div>
      <div className="comment2">
        <span className="userNickname">핑구</span>
        <span className="commentedAt">24.01.18 21:50</span>
        <div className="commentText">
          {"우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~"}
        </div>
        <img
          className="commentEditIcon"
          src={editIcon}
          alt={"댓글 수정 아이콘"}
        ></img>
        <img
          className="commentDelIcon"
          src={delIcon}
          alt={"댓글 삭제 아이콘"}
        ></img>
        <img
          className="commentHorizon"
          src={footerHorizon}
          alt={"수평선"}
        ></img>
      </div>
      <div className="comment3">
        <span className="userNickname">달팽스</span>
        <span className="commentedAt">24.01.18 21:50</span>
        <div className="commentText">
          {"우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~"}
        </div>
        <img
          className="commentEditIcon"
          src={editIcon}
          alt={"댓글 수정 아이콘"}
        ></img>
        <img
          className="commentDelIcon"
          src={delIcon}
          alt={"댓글 삭제 아이콘"}
        ></img>
        <img
          className="commentHorizon"
          src={footerHorizon}
          alt={"수평선"}
        ></img>
      </div>
      <div className="box"></div>
    </div>
  );
}

export default Footer;
