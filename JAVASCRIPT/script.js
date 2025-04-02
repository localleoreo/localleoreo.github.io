console.log(`Cześć żelku! O to test zżelenia.`);

//zmienne
let liczba = 1 // wartość całk.
let liczba2 = 2.5 // wartość float
let imie = `Antos` // wartość string, łańcuch znaków 
let prawda = true // wartość boolean, logiczna

//Wyświetlanie zmiennej

console.log(imie);

// KONTANTENACJA - łączenie łańcuchów znakowych

console.log(`Twoje imię: "` + imie); //konkatenacja starego typu
console.log(`Witaj drogi ćp${imie}`); //zapis ze znakiem grawisu, aktualne podejście

//indeksy w zmiennych
let imie2 = "aga"
console.log(imie2[0]);

//inkrementacja i dekrementacja - przyrost i redukcja wartości
let liczba3 = 1
console.log(`Wartość przed inkrementacją: ${liczba3}`);
liczba3 ++
console.log(`Wartość po inkrementacji: ${liczba3}`);
liczba3 --
console.log(`Wartość po dekrementacji: ${liczba3}`);

//sprawdzenie typu zmiennej
console.log(`Typ zmiennej liczba3 to ${typeof(imie2)}`);

// typ object (format JSON) - zapis typu klucz wartości

const samochody = {
    ford: 450000,
    opel: 50000,
    miatka: 9999999,
}

/*let random = Math.random()
if (random < 0.3){
    console.log(`Nigro`);
}
else if (random > 0.3 && random < 0.7){
    console.log(`Duże negro`);
}
else{
    console.log(`Niggatron3000 absolute destroyer`);
}*/

// Przypisanie wartości według klucza

let mondeo = samochody.ford
console.log(`Cena wybranego samochodu wynosi: ${mondeo}zł.`);

// Tablice- - wartości przechowujące wiele wartości
let uzytkownik = [`jakup`,`Antos`,18,`694 202 137`, true]
console.log(uzytkownik[0]); // wyświetli imię

// tworzenie tablicy z argumentów
let negronis = new Array("Teto","Kasane",32,true)

//tablice wielowymiarowe
let uzytkownicy = [
    ["Lp.","Imię","Nazwisko","Miejscowość","Nr Tel"],
    [1, "Jakup","Antos","catowice","694 202 137"],
    [2, "mikolay","tesla","catowice, podlasie","699 037 801"]
] 

console.log(uzytkownicy[2][3]);