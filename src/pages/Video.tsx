import { css } from "@emotion/css";
import { ulroot } from "../utils";

function Video() {
  const video = css`
    position: absolute;
    left: 0;
    top: 0;
    background-color: aquamarine;
    height: 100%;
  `;

  return (
    <div className={ulroot}>
      <div className={video} />
    </div>
  );
}

export default Video;
