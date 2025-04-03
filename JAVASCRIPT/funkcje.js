//KURWAAAAAAAAAAAAAAAAAA
function cwel(kto){
    console.log(`${kto} to malutki słodki cwelek<3`)
}
cwel("michał")
// funkcje - bloki kodu wielokrotnego wykorzystania

//funkcja klasyczna

function dodaj(a,b){
    return a+b
}

//funkcja strzałkowa
const dodawanie = (a,b) => {
    return a+b
}
console.log(`Dodawanie: ${dodawanie(5,2)}`)

const uzyt = {
    imie: "jakup",
    nazwisko: "antos",
    miasto: "myslowianie wiemy jak",

    witaj: function(){
        console.log(`ceś, iś bin ${this.imie} ${this.nazwisko}.`);
    }
}

uzyt.witaj()

//funkcje z arg. domyślnymi

function nazwa(nick = "Gość"){
    console.log(`elo zelo, ${nick}`);
}
nazwa("oliwanatrosetoy1993")

//ftunkcje zagnieżdżone

function operacjeMath(a,b){
    function dodaj(){
        return a+b
    }
    function odejmij(){
        return a-b
    }
    function pomnoz(){
        return a*b
    }
    function podziel(){
        return a/b
    }
    console.log(`Dodawanie: ${dodaj()}, odejmowanie: ${odejmij()}, mnożenie ${pomnoz()} i dzielenie: ${podziel()}`);
}
operacjeMath(10,5)

/*

1. Utwórz funkcję, która wyświetli wszystkie dzielniki podanej liczby
2. Dzielnik to liczba która po podzieleniu da nam resztę równą 0
3. Program ma działać w nieskończonej pętli
4. Wyświetl dzielniki w konsoli
*/

/*function dzielona(){
    let liczba = parseInt(prompt("daj liczbe nieujemna"))
    while(liczba > 0){
        for (let b = 1; b < liczba; b++){
            if (liczba%b == 0){
                console.log(b);
            }
       }
    }
}
let liczba = parseInt(prompt("daj liczbe nieujemna"))
dzielona(liczba)*/