// instrukcja IF

let a = 10
let b = 10

if (a>b){
    //Wartość jeżeli prawda
    console.log(`Zmienna a jest większa od b`);
}
else if(a<b){
    //drugi test logiczny
    console.log(`Zmienna b jest większa od a`);
}else{
    console.log(`Zmienna a jest równa b`);
}

//Skrócony zapis instrukcji logicznej

let warunek = (a==b) ? `równe` : `różne`
console.log(warunek);

//studium przypadków - switch i case

let c = 192.168
let d = 0.1

switch(true){
    case c > d:
        console.log(`Zmienna c jest większa od d`);
    break
    case c < d:
        console.log(`Zmienna c jest mniejsza od d`);
    break
    default:
        console.log(`Zmienne są sobie równe`);
}

//parsowanie zmiennych
/*let wiek
wiek = parseInt(prompt("Elo, dawaj ejdża."))
alert(wiek)
*/

/*
1. Kasjer wpisuje w program liczbę kupionych produktów
2. Jeżeli liczba produktów jest równa 2, klient otrzymuje 20% zniżki.
3. Jeżeli liczba produktów jest większa niż 2, otrzymuje 30% zniżki.
4. Wyświetl komunikaty dla każdego możliwego przypadku.
*/

/*let produkty = parseInt(prompt("Drogi kasjerze, podaj ilość zakupionych produktów."))
if (produkty == 2){
    alert(`Zakupiono 2 produkty i naliczono zniżkę 20-procentową!`)
}
else if (produkty > 2){
    alert(`Zakupiono ${produkty} produktów i naliczono 30-procentową zniżkę!`)
}
else{
    alert(`Zakupiono mniej niż 2 produkty (${produkty}) i nie naliczono żadnej zniżki!`)
}
*/

/* 
Strefa parkowania (switchcase)

1. Użytkownik podaje wybraną strefę parkowania (A, B, C)
2. Ceny - A: 6,50zł/h | B: 4,50zł/h | C: 3,50zł/h
3. Parkomat zwraca informację o wybranej strefie i opłacie

Aby upewnić się, że strefa wpisywana jest wielką literą skorzystaj z metody toUpperCase()
*/

/*
let strefa = (prompt("Elo żelo, wybierz strefę (A/B/C)"))
switch(strefa.toUpperCase()){
    case "A":
        alert("Za strefę parkowania A zapłacisz 6,50zł/h.")
    break
    case "B":
        alert("Za strefę parkowania B zapłacisz 4,50zł/h.")
    break
    case "C":
        alert("Za strefę parkowania C zapłacisz 3,50zł/h.")
    break
    default:
        alert("Podano błędną strefę parkowania.")
}
*/

// operatory oraz i lub
// && oraz
// || lub


/*
Ustal cenę na paragonie
1. Wprowadzamy kwotę zakupów (może to być float)
2. Jeżeli klient dokona zakupu w przedziale od 100 do 300 zł to otrzyma 15% rabatu.
3. Jeżeli dokona zakupu powyżej 300zł to otrzyma 25% rabatu.
4. Wyświetl kwotę, którą ma zapłacić klient.
*/

let kwota = parseFloat(prompt("Podaj kwotę zakupów."))

if (kwota > 99 && kwota < 301){
    alert("Kwota zakupów: " + kwota+". Naliczono 15% rabatu, do zapłaty pozostaje: "+kwota*0.85)
}
else if (kwota > 300){
    alert("Kwota zakupów: " + kwota+". Naliczono 25% rabatu, do zapłaty pozostaje: "+kwota*0.75)
}
else{
    alert("Kwota zakupów: " + kwota+". Nie naliczono żadnego rabatu.")
}