import { css } from "@emotion/css";
import { cssStyles, reactStyles, ulroot } from "../utils";
import { ReactComponent as Back } from "../../assets/svg/back.svg";
import { ReactComponent as Circle } from "../../assets/svg/circle.svg";
import { ReactComponent as Users } from "../../assets/svg/users.svg";
import { ReactComponent as SkipPrevious } from "../../assets/svg/skip_previous.svg";
import { ReactComponent as FastRewind } from "../../assets/svg/fast_rewind.svg";
import { ReactComponent as Play } from "../../assets/svg/play.svg";
import { ReactComponent as FastForwind } from "../../assets/svg/fast_forwind.svg";
import { ReactComponent as SkipNext } from "../../assets/svg/skip_next.svg";
import { ReactComponent as Chat } from "../../assets/svg/chat.svg";
import { ReactComponent as FullScreen } from "../../assets/svg/fullscreen.svg";
import { ReactComponent as Volume } from "../../assets/svg/volume.svg";
import Spacer from "../components/Spacer";

function Video() {
  const video = css`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #393737;
    height: 100%;
    width: 100%;
    z-index: 1;
  `;

  const gradient = (degs: number) => css`
    background: linear-gradient(
      ${degs}deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 2;
  `;

  const gradientTop = css`
    ${cssStyles.top}
    height: 150px;
    width: 100%;
    ${gradient(180)}
  `;

  const gradientBottom = css`
    ${cssStyles.bottom}
    height: 120px;
    width: 100%;
    ${gradient(0)}
  `;

  const top = css`
    ${cssStyles.top}
    ${cssStyles.rowFlex}
    align-items: center;
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
    width: 100%;
    z-index: 3;
  `;

  const bottom = css`
    ${cssStyles.bottom}
    ${cssStyles.colFlex}
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    z-index: 3;
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

  const duration = css`
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
  `;

  return (
    <div className={ulroot}>
      {/* Video Container */}
      <div className={video} />

      {/* gradients to add visibility */}
      <div className={gradientTop} />
      <div className={gradientBottom} />

      {/* Top part of the player */}
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

      {/* Bottom part of the player */}
      <div className={bottom}>
        {/* video seekbar and duration */}
        <div style={{ ...reactStyles.rowFlex, alignItems: "center" }}>
          <p className={duration}>2:16</p>
          <div
            style={{
              backgroundColor: "#fbfbfb",
              height: 20,
              flexGrow: 1,
              marginLeft: 15,
              marginRight: 15,
            }}
          ></div>
          <p className={duration}>14:52</p>
        </div>

        {/* player controls */}
        <div style={{ ...reactStyles.rowFlex, alignItems: "center" }}>
          <SkipPrevious />
          <FastRewind />
          <Play />
          <FastForwind />
          <SkipNext />
          <Circle />
          <p className={duration}>ends at 3:41am</p>
          <Volume />
          <Chat />
          <FullScreen />
        </div>
      </div>
    </div>
  );
}

export default Video;
