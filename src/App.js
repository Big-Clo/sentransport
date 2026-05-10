import './App.css';
import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';
import ListeLignes from './ListeLignes';

function App() {
  const lignes = [
    { id: 1,  numero: "1",  depart: "Parcelles Assainies", arrivee: "Plateau",      arrets: 14, couleur: "#e74c3c" },
    { id: 2,  numero: "7",  depart: "Guediawaye",          arrivee: "Place Obe",    arrets: 18, couleur: "#3498db" },
    { id: 3,  numero: "15", depart: "Pikine",              arrivee: "Medina",       arrets: 12, couleur: "#9b59b6" },
    { id: 4,  numero: "23", depart: "Ouakam",              arrivee: "Grand Dakar",  arrets: 10, couleur: "#e67e22" },
    { id: 5,  numero: "8",  depart: "Almadies",            arrivee: "Colobane",     arrets: 16, couleur: "#1abc9c" },
    { id: 6,  numero: "12", depart: "Yoff",                arrivee: "Sandaga",      arrets: 11, couleur: "#e91e63" },
    { id: 7,  numero: "31", depart: "Fann",                arrivee: "HLM",          arrets: 9,  couleur: "#f39c12" },
    { id: 8,  numero: "44", depart: "Liberté 6",           arrivee: "Sicap Baobab", arrets: 7,  couleur: "#2980b9" },
    { id: 9,  numero: "52", depart: "Dieuppeul",           arrivee: "Médina",       arrets: 8,  couleur: "#27ae60" },
    { id: 10, numero: "63", depart: "Liberté 5",           arrivee: "Plateau",      arrets: 13, couleur: "#c0392b" },
  ];

  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <ListeLignes lignes={lignes} />
        <div className="statistiques">
          <Statistique lignes={lignes} />

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