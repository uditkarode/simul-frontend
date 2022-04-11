import { css } from "@emotion/css";
import { cssStyles } from "../utils";

type Props = {
  text: string;
};

function BlackButton(p: Props) {
  const s = css`
    width: 184px;
    height: 60px;
    background: #292727;
    border: 2.2px solid #6b6b6b;
    box-sizing: border-box;
    border-radius: 12px;
    ${cssStyles.rowFlex}
    ${cssStyles.centerAll}
  `;

  const txt = css`
    color: #ffffff;
    font-weight: 500;
    font-size: 28px;
  `;

  return (
    <div className={s}>
      <p className={txt}>{p.text}</p>
    </div>
  );
}

export default BlackButton;
