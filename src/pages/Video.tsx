import { css } from "@emotion/css";
import { cssStyles, ulroot } from "../utils";
import { ReactComponent as Back } from "../../assets/svg/back.svg";
import { ReactComponent as Circle } from "../../assets/svg/circle.svg";
import { ReactComponent as Users } from "../../assets/svg/users.svg";
import Spacer from "../components/Spacer";

function Video() {
  const video = css`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #393737;
    height: 100%;
    width: 100%;
    z-index: -1;
  `;

  const gradient = (degs: number) => css`
    background: linear-gradient(
      ${degs}deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  `;

  const gradientTop = css`
    ${cssStyles.top}
    height: 150px;
    width: 100%;
    ${gradient(180)}
  `;

  const gradientBottom = css`
    ${cssStyles.bottom}
    height: 150px;
    width: 100%;
    ${gradient(0)}
  `;

  const top = css`
    ${cssStyles.top}
    ${cssStyles.rowFlex}
    align-items: center;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    width: 100%;
  `;

  const bottom = css`
    ${cssStyles.bottom}
    ${cssStyles.rowFlex}
    align-items: center;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
    width: 100%;
  `;

  const epn = css`
    font-weight: 500;
    font-size: 2rem;
    color: #fbfbfb;
  `;

  const ping = css`
    font-weight: 500;
    font-size: 1.8rem;
    color: #b8efce;
  `;

  const users = css`
    font-weight: 500;
    font-size: 1.8rem;
    color: #fbfbfb;
    opacity: 80%;
  `;

  return (
    <div className={ulroot}>
      <div className={video} />

      <div className={gradientTop} />
      <div className={gradientBottom} />

      <div className={top}>
        <Back />
        <Spacer width={45} />
        <p className={epn}>
          Hyouka <span style={{ opacity: 0.8 }}>S</span>
          <span>01</span>
          <span style={{ opacity: 0.8 }}>E</span>02
        </p>

        <div style={{ flexGrow: 1 }} />

        <p className={ping}>132ms</p>
        <Spacer width={15} />
        <Circle />
        <Spacer width={15} />
        <Users />
        <Spacer width={6} />
        <p className={users}>4</p>
      </div>

      <div className={bottom}></div>
    </div>
  );
}

export default Video;
