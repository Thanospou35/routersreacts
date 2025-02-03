// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListMovies from './component/ListMovies';
import SectionMovies from './component/SectionMovies';
import Movies from './component/Movies';
import Expot from './component/Expot';
//import CheminOne from './components/CheminOne';
const AppContent = () => {
  
  return (
    <>
      <Routes>
        {/* Route pour les pagee de Connexion et Inscription */}
        <Route path="/" element={<ListMovies />} />
        <Route path="/inscription" element={<SectionMovies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/expot" element={<Expot />} />

        {/* J'ai mt ici les route pour les cards qui sont dans la page d'accueil pour
        quand on click sur un card sa vas directionner les détaille */}
        <Route path="*" element={<h1>Page non trouvée</h1>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
