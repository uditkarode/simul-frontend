import "../styles/Landing.css";
import Spacer from "../components/Spacer";

function Landing() {
  return (
    <>
      <div id="text">
        <p id="heading">
          Simul is
          <br />
          coming soon!
        </p>
        <Spacer height={37} />
        <p id="subheading">stay tuned for more updates</p>
      </div>
    </>
  );
}

export default Landing;
