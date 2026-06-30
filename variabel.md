````markdown
# Variabler med Finch

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Kort introduktion

I den här övningen ska du undersöka vad en [variabel](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.") är.

Du börjar med att använda micro:biten utan robot. När du har förstått hur variabler fungerar är det dags att låta Finch använda en variabel för att bestämma hur snabbt den ska köra.

---

## Lärandemål

Efter övningen ska du kunna:

- förklara vad en variabel är
- skapa och ändra variabler
- använda en variabel i ett program
- använda en variabel för att styra hastigheten på Finch

---

## Begrepp

**Programmering**

- [variabel](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.")
- [värde](#word "Ett värde är information som sparas i en variabel.")
- [händelse](#word "En händelse är något som startar kod, till exempel när en knapp trycks ned.")

**Matematik**

- [hastighet](#word "Hastighet beskriver hur snabbt något rör sig.")

---

## Material

- micro:bit
- Finch Robot 2.0
- USB-kabel

---

## Steg 1: Skapa din första variabel

Skapa en variabel som heter `steg`.

```blocks
let steg = 0
```

---

## Testa @unplugged

Läs programmet.

- Vad heter variabeln?
- Vilket värde har den från början?

---

## Steg 2: Visa variabeln

Visa värdet på micro:bitens display.

```blocks
let steg = 0
basic.showNumber(steg)
```

---

## Testa

Ladda programmet.

Vad visas på displayen?

---

## Steg 3: Öka variabeln

När du trycker på knapp A ska variabeln öka med 1.

```blocks
let steg = 0

input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})
```

---

## Testa

Tryck flera gånger på knapp A.

Fundera:

- Vad händer med variabeln?
- Hur vet du att värdet ändras?

---

## Steg 4: Skapa en ny variabel

Nu ska du skapa en variabel som heter `hastighet`.

```blocks
let hastighet = 10
let steg = 0

input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})
```

---

## Testa @unplugged

Fundera.

Varför kan det vara bra att spara hastigheten i en variabel istället för att skriva talet 10 överallt i programmet?

---

## Steg 5: Visa hastigheten

När du trycker på knapp B ska hastigheten visas.

```blocks
let hastighet = 10
let steg = 0

input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(hastighet)
})
```

---

## Testa

Tryck på knapp B.

Vilket värde visas?

---

## Steg 6: Ändra hastigheten

När du trycker på A+B ska hastigheten öka med 10.

```blocks
let hastighet = 10
let steg = 0

input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(hastighet)
})

input.onButtonPressed(Button.AB, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})
```

---

## Testa

Tryck på A+B några gånger.

Sedan trycker du på B.

Fundera.

- Vad har förändrats?
- Hur vet programmet vilket värde som ska visas?

---

## Steg 7: Nu är det dags att starta Finch

Hittills har vi bara arbetat med micro:biten.

Nu ska roboten använda variabeln `hastighet`.

Lägg först till blocket som startar Finch.

```blocks
let hastighet = 10

finch.startFinch()
```

---

## Steg 8: Använd variabeln

Nu får variabeln styra hur snabbt Finch kör.

```blocks
let hastighet = 10

finch.startFinch()

input.onButtonPressed(Button.B, function () {
    finch.setMove(MoveDir.Forward, 20, hastighet)
})
```

---

## Testa

Tryck på knapp B.

Hur snabbt kör Finch?

---

## Steg 9: Ändra hastigheten och testa igen

Öka hastigheten med A+B.

Kör sedan Finch igen med knapp B.

```blocks
let hastighet = 10

finch.startFinch()

input.onButtonPressed(Button.B, function () {
    finch.setMove(MoveDir.Forward, 20, hastighet)
})

input.onButtonPressed(Button.AB, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})
```

---

## Testa

Kör roboten flera gånger.

Öka hastigheten mellan varje körning.

Fundera.

- Vad ändrades?
- Behövde du skriva om blocket `setMove`?
- Vad gjorde variabeln?

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
- Vad är skillnaden mellan variablerna `steg` och `hastighet`?
- Varför är det smart att använda variabler i ett program?
- Hur gjorde variabeln det lätt att ändra robotens hastighet?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- skapa variabler
- ändra variabelvärden
- använda variabler i ett program
- styra Finch med hjälp av en variabel

---

## Bonus – Så här kan du utmana dig

Skapa en ny knapp som minskar hastigheten med 10.

Hur kan du se till att hastigheten aldrig blir mindre än 10?
````
