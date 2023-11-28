import { Route, Router, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomePage from "./pages/HomePage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import CollectionsPage from "./pages/CollectionsPage";
import AboutImamPage from "./pages/AboutImamPage";
import HadithPage from "./pages/HadithPage";
import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import Collections from "./components/Collections";
import SearchResultPage from "./pages/SearchResultPage";
import SingleHadithPage from "./pages/SingleHadithPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./index.css"
import CommingSoon from "./components/CommingSoon";


function App() {
  return (
    <div className="App">
      <ScrollToTopButton />
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/collections' element={<Collections directcall={true} />} />
        <Route path='/collections/:name' element={<CollectionsPage />} />
        {/* <Route path='/collections/:name/about' element={<AboutImamPage />} /> */}
        <Route path='/collections/:name?/book/:bookname/:chapter?' element={<HadithPage />} />
        <Route path='/search/:keyword' element={<SearchResultPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/hadithpage/:name/:chapter/:hadithNum/:from/:to/:bookname' element={<SingleHadithPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
