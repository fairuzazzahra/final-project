import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProfilePage, HomePage, VideoDetail } from "../pages";
// import './App.css';
// import ProfilePage from '../pages/ProfilePage';
// import HomePage from '../pages/HomePage';
// import AboutPage from '../pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:id" render={() => <ProfilePage />} />
        <Route path="/video_detail" render={() => <VideoDetail />} />
        <Route path="/" render={() => <HomePage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
