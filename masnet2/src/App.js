import './App.css';
import Navbar from "./navbar/navbar-app"
import WelcomePage from "./welcom-page/welcome-page-app"
import SeoPage from './seo-page/seo-page-app';
import ProfilePage from './profile-page/profile-app';
import ParallaxPage from './parallax-page/parallax-page-app'
import LimitlessPage from './limitless-page/limitless-page-app';
import ThemPage from './them-page/them-page';

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
    </div>
  );
}

export default App;