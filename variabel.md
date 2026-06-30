# Variabler med Finch: stegräknare och hastighet

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Kort introduktion

I den här övningen ska du lära dig vad en variabel är.

Först gör du en stegräknare på micro:biten. Sedan använder du en variabel för att styra hur snabbt Finch kör.

## Lärandemål

Efter övningen ska du kunna:

- förklara vad en variabel är
- ändra värdet i en variabel
- använda en variabel i ett program
- styra Finch med hjälp av en hastighetsvariabel

## Begrepp

Programmering:

- variabel
- värde
- öka
- händelse

Matematik:

- tal
- förändring
- hastighet

## Material

- Finch Robot 2.0
- micro:bit
- USB-kabel

## Steg 1: Starta Finch

Lägg till blocket som startar Finch.

```blocks
finch.startFinch()
```

## Steg 2: Skapa en variabel

Skapa variabeln `steg`.

```blocks
let steg = 0
finch.startFinch()
```

## Steg 3: Visa variabeln

Visa värdet på micro:bitens display.

```blocks
let steg = 0
finch.startFinch()
basic.showNumber(steg)
```

## Steg 4: Öka stegräknaren

När du trycker på knapp A ska `steg` öka med 1.

```blocks
let steg = 0
finch.startFinch()
basic.showNumber(steg)
input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})
```

## Testa stegräknaren @unplugged

Tryck på knapp A flera gånger.

Fundera:

- Vad var startvärdet?
- Vad händer med variabeln varje gång du trycker?
- Varför är det smart att spara talet i en variabel?

## Steg 5: Skapa en hastighetsvariabel

Nu skapar vi variabeln `hastighet`.

```blocks
let hastighet = 10
let steg = 0
finch.startFinch()
basic.showNumber(steg)
input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})
```

## Steg 6: Visa hastigheten med knapp B

När du trycker på knapp B ska micro:biten visa hastigheten.

```blocks
let hastighet = 10
let steg = 0
finch.startFinch()
basic.showNumber(steg)
input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(hastighet)
})
```

## Steg 7: Kör Finch med hastighetsvariabeln

Nu ska Finch köra framåt. Hastigheten bestäms av variabeln `hastighet`.

```blocks
let hastighet = 10
let steg = 0
finch.startFinch()
basic.showNumber(steg)
input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(hastighet)
    finch.setMove(MoveDir.Forward, 20, hastighet)
})
```

## Testa hastigheten @unplugged

Tryck på knapp B.

Fundera:

- Hur snabbt kör Finch?
- Vilket värde har variabeln `hastighet`?
- Var i programmet används variabeln?

## Steg 8: Öka hastigheten

När du trycker på A+B ska hastigheten öka med 10.

```blocks
let hastighet = 10
let steg = 0
finch.startFinch()
basic.showNumber(steg)
input.onButtonPressed(Button.A, function () {
    steg += 1
    basic.showNumber(steg)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(hastighet)
    finch.setMove(MoveDir.Forward, 20, hastighet)
})
input.onButtonPressed(Button.AB, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})
```

## Testa och jämför @unplugged

Tryck på A+B en gång. Tryck sedan på B.

Testa flera gånger.

Fundera:

- Vad händer när hastigheten ökar?
- Ändras själva programmet?
- Eller ändras bara värdet i variabeln?

## Avslutande test

Visa att du kan:

1. öka stegräknaren med knapp A
2. visa och använda hastigheten med knapp B
3. öka hastigheten med A+B
4. förklara vad en variabel gör

## Avslutande diskussion

Diskutera tillsammans:

- Vad är en variabel?
- Varför kan samma program ge olika resultat?
- Vad är skillnaden mellan variabeln `steg` och variabeln `hastighet`?
- Hur kan variabler hjälpa oss att undersöka robotens rörelse?

## Uppföljning av lärandemålen

Nu har du tränat på att:

- skapa variabler
- ändra variabelvärden
- visa variabler på micro:biten
- använda en variabel för att styra Finch

## Bonus – Så här kan du utmana dig

Kan du ändra programmet så att hastigheten börjar på 20?

Kan du lägga till en knapp som sänker hastigheten?
