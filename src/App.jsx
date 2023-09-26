import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import MentorsList from './components/MentorsList'
import Tesitmonals from './components/Testimonals'
import WorkProgress from './components/WorkProgress'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FrequentlyAskQues from './components/FrequentlyAskQues'
import Footer from './components/Footer'
// import Sigup from './components/signup/Sigup'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MentorsList/>
      <WorkProgress />
      <Tesitmonals />
      <FrequentlyAskQues />
      <Footer />

      {/* <Sigup /> */}
    </>
  )
}

export default App
