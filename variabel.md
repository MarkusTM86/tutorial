# Variabler med Finch

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Kort introduktion

I den här övningen ska du undersöka vad en [variabel](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.") är.

Du börjar med att arbeta med micro:biten. När du har förstått hur variabler fungerar ska du använda en variabel för att styra hastigheten på Finch.

---

## Lärandemål

Efter övningen ska du kunna:

- förklara vad en variabel är
- skapa och ändra variabler
- använda en variabel i ett program
- använda en variabel för att styra Finch

---

## Begrepp

**Programmering**

- [variabel](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.")
- [värde](#word "Ett värde är information som sparas i en variabel.")
- [händelse](#word "En händelse är något som startar kod, till exempel när micro:biten skakas eller när en knapp trycks ned.")

**Matematik**

- [hastighet](#word "Hastighet beskriver hur snabbt något rör sig.")

---

## Material

- micro:bit
- Finch Robot 2.0
- USB-kabel

---

## Steg 1: Skapa en variabel

Öppna kategorin `||variables:Variabler||`.

Välj **Skapa en variabel...**

Ge variabeln namnet **steg**.

När du har skapat variabeln får den automatiskt startvärdet **0**.

Programmet ska nu se ut så här.

```blocks
let steg = 0
```

---

## Testa @unplugged

Fundera.

- Vad heter variabeln?
- Vilket värde har den från början?
- Varför kan det vara bra att spara ett värde i en variabel?

---

## Steg 2: Visa variabelns värde

Öppna kategorin `||basic:Grundläggande||`.

Välj blocket **visa siffra**.

Öppna sedan `||variables:Variabler||` och dra in variabeln **steg** i blocket.

Programmet ska se ut så här.

```blocks
let steg = 0
basic.showNumber(steg)
```

---

## Testa

Ladda programmet till micro:biten.

Vilket tal visas?

Varför visas just det talet?

---

## Steg 3: Skaka micro:biten

Nu ska du använda en ny händelse.

Öppna kategorin `||input:Indata||`.

Välj blocket **vid skakning**.

Öppna sedan `||variables:Variabler||`.

Välj blocket **ändra steg med 1**.

Lägg till blocket **visa tal** från `||basic:Grundläggande||`.

Programmet ska nu se ut så här.

```blocks
let steg = 0

input.onGesture(Gesture.Shake, function () {
    steg += 1
    basic.showNumber(steg)
})
```

---

## Testa

Skaka micro:biten flera gånger.

Fundera.

- Vad händer varje gång du skakar?
- Hur förändras variabeln?
- Vad visas på displayen?

---

## Steg 4: Skapa en ny variabel

Nu ska du skapa en ny variabel.

Öppna `||variables:Variabler||`.

Välj **Skapa en variabel...**

Ge den namnet **hastighet**.

Ge variabeln startvärdet **0**.

Programmet ska nu se ut så här.

```blocks
let hastighet = 0
let steg = 0

input.onGesture(Gesture.Shake, function () {
    steg += 1
    basic.showNumber(steg)
})
```

---

## Testa @unplugged

Fundera.

- Vad används variabeln **steg** till?
- Vad tror du att variabeln **hastighet** kommer att användas till?

---

## Steg 5: Visa hastigheten

Öppna kategorin `||input:Indata||`.

Lägg till blocket **när knapp A trycks**.

Öppna `||basic:Grundläggande||`.

Lägg in blocket **visa tal**.

Öppna sedan `||variables:Variabler||` och välj variabeln **hastighet**.

Programmet ska nu se ut så här.

```blocks
let hastighet = 0
let steg = 0

input.onGesture(Gesture.Shake, function () {
    steg += 1
    basic.showNumber(steg)
})

input.onButtonPressed(Button.A, function () {
    basic.showNumber(hastighet)
})
```

---

## Testa

Tryck på knapp A.

Vilket tal visas?

Vad berättar talet?

---

## Steg 6: Ändra hastigheten

Öppna kategorin `||input:Indata||`.

Lägg till blocket **när knapp A trycks** om du inte redan gjort det.

Öppna `||variables:Variabler||`.

Välj blocket **ändra hastighet med 1**.

Ändra värdet från **1** till **10**.

Visa sedan hastigheten på displayen.

Programmet ska nu se ut så här.

```blocks
let hastighet = 0
let steg = 0

input.onGesture(Gesture.Shake, function () {
    steg += 1
    basic.showNumber(steg)
})

input.onButtonPressed(Button.A, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})
```

---

## Testa

Tryck flera gånger på knapp A.

Fundera.

- Hur förändras hastigheten?
- Vilket värde visas på displayen?

---

## Steg 7: Nu är det dags att använda Finch

Hittills har du bara arbetat med micro:biten.

Nu ska Finch använda variabeln **hastighet**.

Lägg först till blocket som startar Finch.

```blocks
let hastighet = 0

finch.startFinch()

input.onButtonPressed(Button.A, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})
```

---

## Testa @unplugged

Programmet gör ännu ingenting med roboten.

Varför tror du att Finch måste startas innan den kan köra?

---

## Steg 8: Låt variabeln styra Finch

Öppna kategorin `||input:Indata||`.

Lägg till blocket **när knapp B trycks**.

Lägg sedan till Finch-blocket för att köra framåt i X cm. 

Använd variabeln **hastighet** som hastighet.

Programmet ska nu se ut så här.

```blocks
let hastighet = 0

finch.startFinch()

input.onButtonPressed(Button.A, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})

input.onButtonPressed(Button.B, function () {
    finch.setMove(MoveDir.Forward, 20, hastighet)
})
```

---

## Testa

1. Tryck på knapp A tills displayen visar en hastighet du vill prova.
2. Tryck på knapp B för att köra Finch.
3. Prova flera olika hastigheter.

Fundera.

- Kör Finch lika snabbt varje gång?
- Vad är det som förändras?
- Behövde du ändra blocket **setMove**?

---

## Avslutande test

Visa att du kan:

- skapa en variabel
- ändra värdet i en variabel
- visa en variabel på displayen
- använda en variabel för att styra Finch

---

## Avslutande diskussion

Diskutera tillsammans.

- Vad är en variabel?
- Vad är skillnaden mellan variablerna **steg** och **hastighet**?
- Varför är det smartare att använda en variabel än att skriva in ett nytt tal varje gång?
- Hur hjälpte variabeln Finch att köra olika snabbt?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- skapa variabler
- ändra variabler
- använda en händelse som startar kod
- använda en variabel för att styra en robot

---

## Bonus – Så här kan du utmana dig

Kan du skapa en knapp som minskar hastigheten med 10?

Hur kan du se till att hastigheten aldrig blir mindre än 0 eller större än 100?