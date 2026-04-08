import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:theajamesmoriba@gmail.com" data-cursor="disable">
                theajamesmoriba@gmail.com
              </a>
            </p>
            <h4>WhatsApp</h4>
            <p>
              <a href="https://wa.me/224622599507" target="_blank" rel="noopener noreferrer" data-cursor="disable">
                +224 622 599 507
              </a>
            </p>
            <h4>Formation</h4>
            <p>Étudiant en Ingénierie Logicielle à l'Université Nongo Conakry (UNC)</p>
          </div>
          <div className="contact-box">
            <h4>Réseaux Sociaux</h4>
            <a
              href="https://github.com/Jack-Moriba"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="GitHub"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/Jacques-Moriba-THEA"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="LinkedIn"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://behance.net/Jacques-Moriba-Thea"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Behance"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="https://instagram.com/me_lil.boy_"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Instagram"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://facebook.com/Jacques-Moriba-THEA"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Facebook"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href="https://pinterest.com/humcompany"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Pinterest"
            >
              Pinterest <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Conçu et Développé <br /> par <span>Jacques Moriba Thea</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
