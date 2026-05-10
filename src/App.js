import './App.css';
import Statistique from './Statistique';
import ListeLignes from './ListeLignes';
import { useState } from 'react';
import Header from './Header';
import Recherche from './Recherche';
import LigneBus from './LigneBus';
import Footer from './Footer';
import DetailLigne from './DetailLigne';

function App() {

  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

  const lignes = [
    { id: 1, numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14, listeArrets: ["Parcelles U14", "Parcelles U10", "Camberene", "Patte d'Oie", "Grand Dakar", "Colobane", "Ponty", "Plateau"] },
    { id: 2, numero: "7", depart: "Guediawaye", arrivee: "Place Obe", arrets: 18, listeArrets: ["Guediawaye", "Pikine", "Thiaroye", "Keur Massar", "Grand Yoff", "Parcelles", "Liberte 6", "Place Obe"] },
    { id: 3, numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12, listeArrets: ["Pikine Centre", "Thiaroye Gare","Hann", "Colobane", "Fass", "Medina"] },
    { id: 4, numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10, listeArrets: ["Ouakam Village", "Mermoz", "Fann","Point E", "Liberte 5", "Grand Dakar"] },
    { id: 5, numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16, listeArrets: ["Almadies", "Ngor", "Yoff", "Ouest Foire", "Liberte 6", "Colobane"] },
    { id: 6, numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11, listeArrets: ["Yoff Village", "Aeroport LSS","Parcelles U17", "Grand Yoff", "HLM", "Sandaga"] },
  ];

  const lignesFiltrees = lignes.filter(l =>
    l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
    l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
    l.numero.includes(recherche)
  );

  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null); // re-clic = désélectionner
    } else {
      setLigneSelectionnee(ligne); // premier clic = sélectionner
    }
  }
  
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <Recherche valeur={recherche} onChange={setRecherche} />
        
        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne{lignesFiltrees.length > 1 ? 's' : ''} trouvée{lignesFiltrees.length > 1 ? 's' : ''}
        </p>

        {/* Affichage des cartes de bus avec gestion du clic (V2) */}
        {lignesFiltrees.map(ligne => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={ligneSelectionnee && ligneSelectionnee.id === ligne.id}
            onClick={() => handleClickLigne(ligne)}
          />
        ))}

        {/* Affichage des détails si une ligne est sélectionnée (V2) */}
        {ligneSelectionnee && <DetailLigne ligne={ligneSelectionnee} />}

        {/* Liste complète des lignes (V1) */}
        <ListeLignes lignes={lignes} />

        {/* Section statistiques complète (V1) */}
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