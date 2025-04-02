// PĘTLE

// pętle for - pętla działająca w zakresie od - do

for(let i = 1; i<=10; i++){
    console.log(i)
}

for (let a = 2; a<=20; a+=2){
    console.log(a);
}

//pętla while
let lp = 1
while(lp <= 10){
    console.log(`Liczba porządkowa: ${lp}`);
    lp++
}

//pętla do while - wykona się conajmniej jeden raz niezależnie od tego czy warunek jest spełniony

let v = 6
do{
    console.log(`Elo żelo, go home whigga`);
    v++
}while(v<5){

}

/*
// break i continue
while(true){
    let n = parseInt(prompt("Podaj liczbę naturalną"))
    if (n > 10){
        break
    }
}

for (let i = 0; i<=20;i++){
    if(i%2==0){
        continue //gdy wartość zmiennej będzie parzysta, pętla pominie wykonywanie tego kroku
    }
    console.log(`Liczba nieparzysta ${i}`);
}
*/
//Wprowadzenie tablicy pętlą for

let uzytkownik = ["jakup","antos",18,"694 202 137","catowice",true]

for (let i = 0; i < uzytkownik.length; i++){
    console.log(uzytkownik[i]);
}


//tablice wielowymiarowe + for
let uzytkownicy = [
    ["Lp.","Imię","Nazwisko","Miejscowość","Nr Tel"],
    [1, "Jakup","Antos","catowice","694 202 137"],
    [2, "mikolay","tesla","catowice, podlasie","699 037 801"]
]

for (let i = 0; i < uzytkownicy.length; i++){
    for (let v = 0; v < uzytkownicy[i].length; v++){
        console.log(uzytkownicy[i][v]);
    }
}