import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Bonjour ! Je suis</h2>
            <h1>
              JACQUES
              <br />
              <span>MORIBA THEA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Étudiant en Ingénierie Logicielle</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Développeur</div>
              <div className="landing-h2-2">Full Stack</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Cybersécurité</div>
              <div className="landing-h2-info-1">Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
