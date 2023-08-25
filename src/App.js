import './App.scss';
import React from 'react';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './requests';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from "./components/Login";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/"  element={
              <React.Fragment>
                <Header />
                <HomeBanner />
              </React.Fragment>
            } />

            <Route path="/login"  element={
              <React.Fragment>
                <Login page={true}/>
              </React.Fragment>
            } />
            <Route path="/register"  element={
              <React.Fragment>
                <Login page={false} />
              </React.Fragment>
            } />

            <Route path="/dashboard"  element={
              <React.Fragment>
                <Navbar />
                <Banner />
                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow />

      <Row title="Trending now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
      <Footer />
              </React.Fragment>
            } />
          </Routes>
          </Router>
      </React.Fragment>
  );
}

export default App;