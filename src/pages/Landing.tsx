import "../styles/Landing.css";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { css } from "@emotion/css";

function Landing() {
  const centreContent = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  `;

  const fun = css`
    font-weight: 700;
    color: #502c56;
  `;

  return (
    <>
      <Menu style={{ marginTop: 31, marginLeft: 36 }} />
      <div className={centreContent}>
        <p style={{ fontSize: "4rem", fontWeight: 500 }}>
          Join in on the <span className={fun}>fun</span>!
        </p>
      </div>
    </>
  );
}

export default Landing;
