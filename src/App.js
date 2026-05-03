import './App.css';
import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';
import LigneBus from './LigneBus';

function App() {
  const lignes = [
    { id: 1, numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14 },
    { id: 2, numero: "7", depart: "Guediawaye", arrivee: "Place Obe", arrets: 18 },
    { id: 3, numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12 },
    { id: 4, numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10 },
    { id: 5, numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16 },
    { id: 6, numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11 },
  ];

  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <ListeLignes lignes={lignes} />
        <div className="statistiques">
          <Statistique />

          <div className="statistique">
            <span className="statistique-chiffre">150</span>
            <span className="statistique-libelle">arrêts</span>
          </div>

          <div className="statistique">
            <span className="statistique-chiffre">42</span>
            <span className="statistique-libelle">bus actifs</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;