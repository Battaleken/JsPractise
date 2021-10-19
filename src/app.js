console.log("Merhaba JavaScript")


// JS is not type safe
let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarDun)


const euroDun = 11.2

console.log(euroDun)

let konutKredileri = ["Konut Kredisi", "Emlak Kredisi", "Taşıt Kredisi", "Arsa Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

console.log(konutKredileri)

