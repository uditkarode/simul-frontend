import "../styles/Landing.css";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { ReactComponent as User } from "../../assets/svg/user.svg";
import { ReactComponent as Identifier } from "../../assets/svg/identifier.svg";
import { css } from "@emotion/css";
import TextField from "../components/TextField";
import Spacer from "../components/Spacer";

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

      {/* Wrapper div for the centre content */}
      <div className={centreContent}>
        <p style={{ fontSize: "5rem", fontWeight: 500 }}>
          Join in on the <span className={fun}>fun</span>!
        </p>

        <Spacer height={56} />

        <TextField
          icon={User}
          hint={"your nickname..."}
          shortcut={["Ctrl", "N"]}
        />

        <Spacer height={14} />

        <TextField
          icon={Identifier}
          hint={"room identifier..."}
          shortcut={["Ctrl", "R"]}
          iconStyle={{ marginTop: 2 }}
        />
      </div>
    </>
  );
}

export default Landing;
