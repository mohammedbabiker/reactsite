import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        lorem Ips et sapien et dolor sit amet, consectetur adipis ac metus et
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
        consectetur adip.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:mobabiekrbabai20@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://wa.me/+996542160187"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://m.me/mohammedbabai.16"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
