import './Statistique.css';

function Statistique({ lignes }) {
  const totalLignes = lignes.length;

  return (
    <div className="statistique">
      <span className="statistique-chiffre">{totalLignes}</span>
      <span className="statistique-libelle">lignes</span>
    </div>
  );
}

export default Statistique;