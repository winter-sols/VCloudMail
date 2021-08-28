import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { APP_ROUTERS } from "configurations"

import Header from "components/Header"
import Footer from "components/Footer"

import Dashboard from "pages/Dashboard"

const AppRouter = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path={APP_ROUTERS.DASHBOARD} component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  </>
)

export default AppRouter
