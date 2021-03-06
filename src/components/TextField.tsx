import { css } from "@emotion/css";
import { CSSProperties } from "react";
import { Icon } from "../utils";
import Spacer from "./Spacer";

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

  const input = css`
    padding-left: 25px;
    font-weight: 400;
    font-size: 26px;
    color: #353535;
    flex-grow: 1;
    background: transparent;
    border: none;
    outline: none;
  `;

  const shortcutMinor = css`
    font-size: 25px;
    color: #6c6a6a;
    font-weight: 500;
    opacity: 70%;
  `;

  const shortcutMajor = css`
    font-size: 25px;
    color: #505050;
    font-weight: 600;
    opacity: 70%;
  `;

  return (
    <div className={s}>
      <div className={wrapper}>
        <p.icon style={{ opacity: "90%", ...(p.iconStyle ?? {}) }} />
        <input className={input} placeholder={p.hint} />
        <p style={{ marginTop: 1 }}>
          <span className={shortcutMinor}>{p.shortcut[0]}</span>
          &nbsp;
          <span className={shortcutMajor}>{p.shortcut[1]}</span>
        </p>
      </div>
    </div>
  );
}

export default TextField;
