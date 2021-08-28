import { Link } from "react-router-dom"
import "./style.scss"

import { APP_ROUTERS } from "configurations"

const Header = () => (
  <div className="header flex">
    Header
    <div className="header-navbar flex">
      <Link to={APP_ROUTERS.DASHBOARD}>Home</Link>
      <Link to={APP_ROUTERS.SERVICES}>Services</Link>
      <Link to={APP_ROUTERS.TESTIMONIAL}>Testimonial</Link>
      <Link to={APP_ROUTERS.CONTACT_US}>Contact Us</Link>
    </div>
  </div>
)

export default Header
