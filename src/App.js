import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Sketch from './components/sketch/Sketch';
import Artists  from './components/artist/Artists'
import Collection from './components/collection/Collection';
import ApplyForm from './components/apply/Apply';
import CreateArtWork from './components/collection/CreateArtWork';
import { ArtistDetail } from './components/artist/ArtistDetail';
import { Home } from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Artwork } from './components/collection/Artwork';




function App() {
  return (
    <div className="App">
      <div className='headerParent'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sketch' element={<Sketch />} />
            <Route path='/artists' element={<Artists />} />
            <Route path='/artist/:id' element={<ArtistDetail />} />
            <Route path='/collection' element= {<Collection />} />
            <Route path='/artwork/:id' element={<Artwork />} />
            <Route path='/apply' element= {<ApplyForm />} />
            <Route path='/createArt' element= {<CreateArtWork />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

