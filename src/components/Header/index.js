import { Link } from "react-router-dom"
import "./style.scss"

import { APP_ROUTERS } from "configurations"

const Header = () => (
  <div className="header flex">
    <div className="header-logo flex">
      <Link to={APP_ROUTERS.HOME}>VCloudMail</Link>
    </div>
    <div className="header-navbar flex">
      <Link to={APP_ROUTERS.DASHBOARD}>Dashboard</Link>
      <Link to={APP_ROUTERS.SERVICES}>Services</Link>
      <Link to={APP_ROUTERS.TESTIMONIAL}>Testimonial</Link>
      <Link to={APP_ROUTERS.CONTACT_US}>Contact Us</Link>
    </div>
  </div>
)

export default Header
