import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { APP_ROUTERS } from "configurations"

import Header from "components/Header"
import Footer from "components/Footer"

import Home from "pages/Home"
import Dashboard from "pages/Dashboard"
import Services from "pages/Services"
import Testimonial from "pages/Testimonial"
import ContactUs from "pages/ContactUs"

const AppRouter = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path={APP_ROUTERS.HOME} component={Home} />
        <Route path={APP_ROUTERS.DASHBOARD} component={Dashboard} />
        <Route path={APP_ROUTERS.SERVICES} component={Services} />
        <Route path={APP_ROUTERS.TESTIMONIAL} component={Testimonial} />
        <Route path={APP_ROUTERS.CONTACT_US} component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  </>
)

export default AppRouter
