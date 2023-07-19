import './App.css';
import Navbar from "./component/navbar/navbar-app";
import WelcomePage from './component/welcome-page/welcome-page-app';
import SeoPage from './component/seo-page/seo-page-app';
import ProfilePage from "./component/profile-page/profile-page-app";
import ParallaxPage from './component/parallax-page/parallax-page-app';
import LimitlessPage from './component/limitless-page/limitless-page-app';
import ThemPage from './component/them-page/them-page-app';
import CustomersPage from './component/customers/customers-page-app';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <WelcomePage></WelcomePage>
      <SeoPage></SeoPage>
      <ProfilePage></ProfilePage>
      <ParallaxPage></ParallaxPage>
      <LimitlessPage></LimitlessPage>
      <ThemPage></ThemPage>
      <CustomersPage></CustomersPage>
    </div>
  );
}

export default App;