//Operacje na tablicach

//Katalog produktów
/* Wybierz produkt z katalogu (podając numer indeksu)

Wyświetl informacje o wybranym produkcie i jego cenie
*/
/*
let produkty = ["Hatsune Miku Body Pillow","Kasane Teto Mug", "Akita Neru Wallpaper","Kaai Yuki Voicebank"]
let ceny = [133.49,69.99,79.49,243.28]

let indeks = parseInt(prompt("Podaj numer z katalogu (indeks 1-4): "))
indeks = indeks - 1

//Jeżeli zostanie wprowadzony prawidłowy numer z katalogu wyświetl informacje o produkcie i cenie
if (indeks >= 0 && indeks < (produkty.length - 1)){
    console.log(`Wybrano produkt ${produkty[indeks]} w wysokości ${ceny[indeks]} PLN.`);
}
else {
    console.log(`Podano nieprawidłowy indeks.`);
}
*/
//metody

let liczby = [1,2,3,4,5,6,7,8,9]
liczby[8]=1232
console.log(liczby);

const liczby2 = [1,2,3,4,5,6,7,8,9]
liczby2.push(2)
console.log(liczby2);

//tablice niemutowalne - blokowanie płytkie
const liczby3 = Object.freeze([1,2,3,4,5,6,7,8,9])
liczby3[0] = 1000
console.log(liczby3);

//dodwaniae elemtnów do tablicy
liczby.push(1500)
console.log(liczby);
liczby.unshift(1500) // dodaje elementy na początku tablicy
console.log(liczby);

//usuwanie elementów z tablicy
liczby.pop()
console.log(liczby);
liczby.shift()
console.log(liczby);

//kreator

let kreator = new Array(9).fill(0)
console.log(kreator);

//tablica obiektow
let samohut = [
    {
        marka: "Ford",
        model: "Mondeo",
        przebieg: 150000,
        silnik: 2.0,
        cena: 60000,

    },
    {
        marka: "Saab",
        model: "9.3",
        przebieg: 392000,
        silnik: 2.0,
        cena: 20000,
    },
    {
        marka: "Opel",
        model: "Astra",
        przebieg: 130000,
        silnik: 2.0,
        cena: 70000,
    },
    {
        marka: "Mazda",
        model: "6",
        przebieg: 126000,
        silnik: 2.0,
        cena: 90000,
    }
]

// pętla forEach

samohut.forEach(function(i){
    console.log(i);
})

//Wyświetlanie obiektów na podstawie określonych kryteriów

// przebieg < 130000
samohut.forEach(function(i){
    if (i.przebieg < 151000){
        return console.log(i.model);
    }
})

//map - tworzy nową tablice ze zmodyfikowanymi wartościami

let cennik_brutto = samohut.map(function(i){
    return i.cena * 1.23
})
console.log(cennik_brutto);

// filtrowanie funkcja filter - tworzy nową tablicę dla wszystkich elementów
// bieżącej tablicy, dla której spełniony jest warunek

let filtrowanie = samohut.filter(function(i){
    return i.przebieg < 150000
})
console.log(filtrowanie);

// reduce - redukuje tablicę do jednej wartości, wywołuje funkcję zwrotną dla elementów tablicy

const wartosc = samohut.reduce(
    (suma,produkt) => suma + produkt.cena, 0
)

console.log(`Wartość wszystkich samochodów łącznie wynosi ${wartosc}`);