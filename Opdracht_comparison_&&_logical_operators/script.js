const age = 22;

if (age > 18) {

    console.log("Je mag naar binnen!")
} else {
    console.log("Helaas! Je kan niet naar binnen.")
}

const isFemale = true;

if (isFemale == false) {

    console.log("Ready voor de Ladiesnight?!!")
} else {
    console.log("Deze tickets zijn alleen beschikbaar voor de dames!")
}

const driverStatus = "Bob";

if (driverStatus) {

    console.log("Mooi, je mag rijden!")
} else {
    console.log("Let op! Je mag niet rijden.")
}


// Comparison en logical Operators.
//Deel 1: 50% korting

if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!")
} else {

    console.log("Helaas, je krijgt geen korting :(")
}

//Deel 2: Ludieke actie!

const firstName = "Sarah";

if (firstName == "Sarah" || firstName == "Bram") {

    console.log("Gefeliciteerd, je krijgt een gratis biertje van ons!")
} else {

    console.log("Oh wat jammer! Je krijgt helaas geen gratis biertje van ons.")
}

//Deel 3: Jubileum korting

const totalAmount = 45

if (totalAmount > 100) {

    console.log("Je krijgt een gratis flesje champagne!!!")
} else if (totalAmount > 50) {

    console.log("Je krijgt een gratis portie nachos erbij!")
} else if (totalAmount > 25) {

    console.log("Je krijgt gratis (vega)bitterballen erbij!")
} else {

    console.log("Vraag de barman om een secret shotje!")
}