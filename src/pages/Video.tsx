import { css } from "@emotion/css";
import { cssStyles, ulroot } from "../utils";

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
  `;

  const bottom = css`
    ${cssStyles.bottom}
    ${cssStyles.rowFlex}
  `;

  return (
    <div className={ulroot}>
      <div className={video} />

      <div className={gradientTop} />
      <div className={gradientBottom} />

      <div className={top}></div>

      <div className={bottom}></div>
    </div>
  );
}

export default Video;
