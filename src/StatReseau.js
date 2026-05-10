function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);
  const ligneMax = lignes.reduce((max, l) => l.arrets > max.arrets ? l : max, lignes[0]);

  return (
    <div className="stat-reseau">
      <h3>Statistiques du réseau</h3>
      <p>🚌 Nombre de lignes : <strong>{totalLignes}</strong></p>
      <p>🛑 Total d'arrêts : <strong>{totalArrets}</strong></p>
      <p>🏆 Ligne la plus longue : <strong>{ligneMax.numero}</strong> ({ligneMax.arrets} arrêts)</p>
    </div>
  );
}

export default StatReseau;