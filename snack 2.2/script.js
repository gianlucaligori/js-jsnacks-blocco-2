let nomi = ['Aldo', 'Giovanni', 'Giacomo', 'Marina', 'Gianluca', 'Ajeje', 'Pinco', 'Federica'];

let cognomi = ['Baglio', 'Storti', 'Poretti', 'Massironi', 'Brazorf', 'Pallo'];

function generaNomeCognome() {
  let nome = nomi[Math.floor(Math.random() * nomi.length)];
  let cognome = cognomi[Math.floor(Math.random() * cognomi.length)];
  return `${nome} ${cognome}`;
}

for (let i = 1; i <= 10; i++) {
  console.log(`${i}: ${generaNomeCognome()}`);
}