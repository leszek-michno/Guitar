import "../assets/styles/Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  // AiFillYoutube,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <a href={"mailto: septymaguitars@gmail.com"}>
          septymaguitars@gmail.com
          </a>
        </div>

        <div className="social-media">
          <a
            href={"https://www.facebook.com/septymaguitars"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href={"https://www.instagram.com/septymaguitars/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a href={"mailto: septymaguitars@gmail.com"}>
            <AiOutlineMail />
          </a>
          {/* <a
            href={
              "https://youtube.com/@handsome-boys-rockabilly?si=zQ2t10qOL_CdzZ8m"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube />
          </a>{" "} */}
        </div>

        <div>copyright@2024lem-son</div>
      </div>
    </>
  );
};

 

