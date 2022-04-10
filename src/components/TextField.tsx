import { css } from "@emotion/css";
import { CSSProperties } from "react";
import { Icon } from "../utils";

type Props = {
  icon: Icon;
  hint: string;
  shortcut: [string, string];
  iconStyle?: CSSProperties;
};

function TextField(p: Props) {
  const s = css`
    height: 65px;
    width: 535px;
    background: #eff2f4;
    border: 2px solid rgba(159, 159, 159, 0.87);
    border-radius: 12px;
  `;

  const wrapper = css`
    display: flex;
    flex-direction: row;
    margin-left: 28px;
    margin-right: 28px;
    height: 100%;
    align-items: center;
  `;

  const hint = css`
    margin-left: 25px;
    font-weight: 400;
    font-size: 26px;
    color: rgba(134, 130, 130, 0.57);
  `;

  const shortcutMinor = css`
    font-size: 25px;
    color: #6c6a6a;
    font-weight: 500;
    opacity: 70%;
  `;

  const shortcutMajor = css`
    font-size: 25px;
    color: #474747;
    font-weight: 600;
    opacity: 70%;
  `;

  return (
    <div className={s}>
      <div className={wrapper}>
        <p.icon style={{ opacity: "90%", ...(p.iconStyle ?? {}) }} />
        <p className={hint}>{p.hint}</p>
        <p style={{ marginLeft: "auto", marginTop: 1 }}>
          <span className={shortcutMinor}>{p.shortcut[0]}</span>
          {/* shortcut space */}{" "}
          <span className={shortcutMajor}>{p.shortcut[1]}</span>
        </p>
      </div>
    </div>
  );
}

export default TextField;
