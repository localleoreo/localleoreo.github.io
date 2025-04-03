let a = 10

// klasa

// klasa z konstruktorem - szablon tworzenia obiektów
class samohut{
    //tworzę konstruktor z argumentami tworzącymi obiekt
    constructor(marka, model, przebieg, silnik, rocznik, cena){
        this.marka = marka;
        this.model = model;
        this.przebieg = przebieg;
        this.silnik = silnik;
        this.rocznik = rocznik;
        this.cena = cena;
    }

    //metoda - funkcja wewnątrz klasy
    informacje(){
        console.log(
            `Samohut: ${this.marka} ${this.model},
            Przebieg: ${this.przebieg},
            Silnik: ${this.silnik},
            Rocznik: ${this.rocznik},
            Cena: ${this.cena}`
        );
    }
}

//tworzenie obiektu na podstawie klasy samohut

let auto1 = new samohut("Ford","Mondeo",150000,"2.0",2020,75000)
console.log(auto1);

// zastosowanie metody
auto1.informacje()

//klasa z metodami statycznymi - służą do tworzenia funkcji i nie wymagają żadnych instancji 
// instancja - wartość początkowa budująca obiekt

class kalkulator{
    static suma(a,b){
        return a+b
    }
    static roznica(a,b){
        return a-b
    }
    static iloczyn(a,b){
        return a*b
    }
    static iloraz(a,b){
        return a/b
    }
}

//wykorzystanie metod statycznych

console.log(`Iloraz: ${kalkulator.iloraz(10,5)}`);

//utworzenie obiektu przy pomocy funkcji

function Produkt(kategoria, nazwa){
    this.kategoria = kategoria;
    this.nazwa = nazwa;

    this.komunikat = function(){
        alert(this.kategoria)
    }
}

let produkt1 = new Produkt("Urządzenia peryferyjne","ajpad")

produkt1.komunikat()

//obiekt (typ object) z przypisanymi wartościami zawierająca zagnieżdżone struktury

let ford = {
    model: "Ford",
    cena: 75000,
    opis: ["Liczba drzwi: 5","Przebieg: 150 000","Silnik: 2.0"], //tablica wewnątrz obiektu
    wariant: {
        kolor: "czerwony",
        skrzynia: "automatyczna",
    } //obiekt wewnątrz obiektu
}