//età e km
const km = parseInt(prompt('Quanti km vuole percorrere?'));
const età = parseInt(prompt('quanti hanni ha?'));
console.log(km, typeof km, età, typeof età);

//prezzo base
const prezzoBase = 0.21 * km
console.log(prezzoBase);

//prezzo scontato 
if (età <= 18) {
  prezzoScontato = prezzoBase - (prezzoBase / 100 * 20);
  console.log(prezzoScontato);

} else if (età >= 65) {
  prezzoScontato = prezzoBase - (prezzoBase / 100 * 40);
  console.log(prezzoScontato);
} else {
  prezzoScontato = prezzoBase
  console.log(prezzoScontato);
}

//output
document.getElementById('prezzo-finale').innerHTML = "Il suo biglietto costa:" + " " + prezzoScontato + " " + "euro";