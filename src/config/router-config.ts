import BreweryDetailsPage from "../pages/BreweryDetailsPage";
import LandingPage from "../pages/LandingPage";

interface RouteType {
  path: string;
  component: () => JSX.Element,
};

const routes: RouteType[] = [
  { path: '/', component: LandingPage },
  { path: '/brewery/:breweryId', component: BreweryDetailsPage }
];

export default routes;