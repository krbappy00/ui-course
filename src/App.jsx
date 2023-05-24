
import About from './About/About';
import './App.css'
import Challenges from './Challenges/Challenges'
import Courses from './Courses/Courses';
import Banner from './Header/Banner/Banner'
import Header from './Header/Header'
import NewsLetter from './NewsLetter/NewsLetter';
import Footer from './footer/Footer';
import Review from './review/Review';
import Video from './video/Video';
import Whyus from './whyus/Whyus';

function App() {

  return (
    <div className="w-screen">
      <Header></Header>
      <Banner></Banner>
      <Challenges></Challenges>
      <Courses></Courses>
      <About></About>
      <Whyus></Whyus>
      <Video></Video>
      <Review></Review>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default App
