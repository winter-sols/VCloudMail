import { Link } from "react-router-dom"
import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faDiscord,
  faTelegram,
  faWhatsapp,
  faSkype,
} from "@fortawesome/free-brands-svg-icons"

import { APP_ROUTERS } from "configurations"

const Footer = () => (
  <div className="footer page flex flex-column">
    <div className="footer-menu flex">
      <Link to={APP_ROUTERS.HOME}>Home</Link>
      <Link to={APP_ROUTERS.DASHBOARD}>Dashboard</Link>
      <Link to={APP_ROUTERS.SERVICES}>Services</Link>
      <Link to={APP_ROUTERS.TESTIMONIAL}>Testimonial</Link>
      <Link to={APP_ROUTERS.CONTACT_US}>Contact Us</Link>
    </div>
    <div className="footer-follow flex">
      <Link
        to={{ pathname: "https://www.facebook.com/vcloudmail" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link
        to={{ pathname: "https://www.twitter.com/vcloudmail" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link
        to={{ pathname: "https://www.telegram.com/vcloudmail" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faTelegram} />
      </Link>
      <Link
        to={{ pathname: "https://www.whatsapp.com/vcloudmail" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
      <Link
        to={{ pathname: "https://www.skype.com/vcloudmail" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faSkype} />
      </Link>
      <Link
        to={{ pathname: "https://www.discord.com/vcloudmail" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faDiscord} />
      </Link>
    </div>
    <div className="footer-copyright flex">
      <span>©</span>Copyright 2021 - VCloudMail
    </div>
  </div>
)

export default Footer
