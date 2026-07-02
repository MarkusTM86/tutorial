# Tårtbitar med Finch – Bråk och andelar

```package
finch=github:BirdBrainTechnologies/pxt-finch
tutorial=github:MarkusTM86/tutorial
```

```template
let helhet = 1
let del = 1

finch.startFinch()

input.onButtonPressed(Button.A, function () {
    helhet += 1
    finch.setBeak(0, 0, 100)
    basic.showNumber(helhet)
})

input.onButtonPressed(Button.B, function () {
    del += 1
    finch.setBeak(0, 100, 0)
    basic.showNumber(del)
})

input.onButtonPressed(Button.AB, function () {
    helhet = 1
    del = 1
    finch.setBeak(100, 100, 100)
    basic.showNumber(1)
})
```

## Kort introduktion

I den här övningen ska Finch rita **tårtbitar** för att visa [bråk](#word "Ett bråk beskriver en del av en helhet.").

Programmet innehåller redan två [variabler](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras."):

- **helhet** = hur många delar hela cirkeln delas i
- **del** = hur många delar Finch ska visa

Din uppgift är att programmera vad Finch ska göra när du trycker på loggan.

----------

## Lärandemål

Efter övningen ska du kunna:

- beskriva ett bråk med hjälp av **del** och **helhet**
- förstå att **del** är bråkets **täljare**
- förstå att **helhet** är bråkets **nämnare**
- koppla bråk till en cirkel
- förstå varför vinkeln blir `360 / helhet`
- använda en [loop](#word "En loop upprepar samma kod flera gånger.") för att rita flera tårtbitar

----------

## Begrepp

### Matematik

- [bråk](#word "Ett bråk beskriver en del av en helhet.")
- [andel](#word "En andel beskriver hur stor del av helheten något är.")
- [täljare](#word "Täljaren är talet ovanför bråkstrecket. Den visar hur många delar vi använder.")
- [nämnare](#word "Nämnaren är talet under bråkstrecket. Den visar hur många delar helheten är delad i.")
- [helhet](#word "Helheten är allt tillsammans, till exempel en hel cirkel.")
- [del](#word "En del är en bit av helheten.")
- [vinkel](#word "En vinkel beskriver hur stor en vridning är.")
- [cirkel](#word "En cirkel är 360 grader.")

### Programmering

- [variabel](#word "En variabel är en plats där programmet sparar ett värde.")
- [händelse](#word "En händelse startar kod, till exempel när loggan trycks.")
- [loop](#word "En loop upprepar samma kod flera gånger.")

----------

## Material

- Finch Robot 2.0
- micro:bit
- USB-kabel
- Penna monterad i Finch
- Papper

----------

## Programmet är redan förberett @showdialog

Variablerna finns redan i programmet.

Knapparna fungerar redan.

| Knapp | Funktion | Lampa |
|---|---|---|
| **A** | Ökar **helhet** | Blå näbb |
| **B** | Ökar **del** | Grön näbb |
| **A+B** | Börjar om | Vit näbb |

När micro:biten visar ett tal hjälper lampan dig att se **vilken variabel** som visas.

----------

## Förstå bråket @unplugged

Tänk dig bråket:

```text
1 / 2
```

Här är:

```text
1 = del
2 = helhet
```

Eller med matematikord:

```text
1 = täljare
2 = nämnare
```

Vi kan skriva det så här:


1 / **2**


Då är **2** nämnaren.

Nämnaren berättar att helheten är delad i **2** lika stora delar.

----------

## Bildstöd: del och helhet @unplugged

Exempel:


3 / **4**


betyder:

```text
del = 3
helhet = 4
```

Alltså:

```text
3 av 4 delar
```

Finch ska visa tre tårtbitar av en cirkel som är delad i fyra delar.

----------

## Testa knapparna

Tryck på A.

- Displayen visar **helhet**
- Näbben lyser blå

Tryck på B.

- Displayen visar **del**
- Näbben lyser grön

Ställ sedan in:

```text
helhet = 4
del = 3
```

Det betyder:


3 / 4


----------

## Steg 1: Skapa logghändelsen

Öppna kategorin `||input:Indata||`.

Lägg till blocket **när loggan trycks**.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {

})
```

----------

## Steg 2: Lägg till en paus

Lägg till en kort paus.

Då hinner du släppa roboten innan den börjar rita.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
})
```

----------

## Testa

Tryck på loggan.

Händer något?

Varför inte?

----------

## Rita en liten cirkel

Lägg till specialblocket **rita liten cirkel** i `||specialblock||` Testa på ett papper/whiteboard.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    specialblock.ritaLitenCirkel()
})
```
## Steg 3: Sväng en tårtbit

En hel cirkel är **360 grader**.

Om helheten är delad i fyra delar blir varje tårtbit:

```text
360 / 4 = 90°
```

I programmet använder vi:

```text
360 / helhet
```

Lägg till ett svängblock.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    specialblock.ritaLitenCirkel()
    finch.setTurn(RLDir.Right, 360 / helhet, 10)
})
```

----------

## Testa

Prova:

```text
helhet = 2
```

sedan:

```text
helhet = 4
```

sedan:

```text
helhet = 8
```

Fundera:

- Vad händer med vinkeln?
- Blir tårtbiten större eller mindre?
- Varför?

----------

## Steg 4: Rita utåt

Nu ska Finch rita en linje ut från mitten.

Lägg till blocket **kör framåt 5 cm**.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    specialblock.ritaLitenCirkel()
    finch.setTurn(RLDir.Right, 360 / helhet, 10)
    finch.setMove(MoveDir.Forward, 5, 10)
})
```

----------

## Testa

Vad ritar Finch?

Ser du en sida av en tårtbit?

----------

## Steg 5: Kör tillbaka

För att kunna rita nästa tårtbit behöver Finch köra tillbaka till mitten.

Lägg till blocket **kör bakåt 5 cm**.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    specialblock.ritaLitenCirkel()
    finch.setTurn(RLDir.Right, 360 / helhet, 10)
    finch.setMove(MoveDir.Forward, 5, 10)
    finch.setMove(MoveDir.Backward, 5, 10)
})
```

----------

## Testa

Nu ritar Finch en tårtbit.

Prova:

```text
helhet = 6
```

Fundera:

- Hur stor blir varje tårtbit?
- Vad blir `360 / 6`?

----------

## Fundera @unplugged

Programmet fungerar.

Men det ritar bara **en** tårtbit.

Hur skulle du göra om du ville rita tre tårtbitar?

Skulle du kopiera samma kod tre gånger?

Eller finns det ett smartare sätt?

----------

## Steg 6: Upprepa med en loop

Öppna kategorin `||loops:Loopar||`.

Lägg en **upprepa**-loop runt rörelserna.

Loopen ska upprepas **del** gånger.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    specialblock.ritaLitenCirkel()
    for (let index = 0; index < del; index++) {
        finch.setTurn(RLDir.Right, 360 / helhet, 10)
        finch.setMove(MoveDir.Forward, 5, 10)
        finch.setMove(MoveDir.Backward, 5, 10)
    }
})
```

----------

## Testa

Ställ in:

```text
helhet = 4
del = 3
```

Det betyder:

```text
3 / 4
```

Tryck på loggan.

Fundera:

- Hur många tårtbitar ritades?
- Hur många delar är hela cirkeln delad i?
- Hur stor del saknas?

----------

## Undersök olika bråk @unplugged

| Bråk | del | helhet |
|---|---:|---:|
| 1 / **2** | 1 | 2 |
| 1 / **3** | 1 | 3 |
| 2 / **3** | 2 | 3 |
| 1 / **4** | 1 | 4 |
| 3 / **4** | 3 | 4 |
| 5 / **8** | 5 | 8 |

Rita varje bråk.

Vilka bråk visar ungefär lika stor andel?

----------

## Avslutande test

Välj ett bråk.

Ställ in **helhet** med A.

Ställ in **del** med B.

Tryck på loggan och låt Finch rita.

Låt en klasskamrat gissa vilket bråk du valde.

----------

## Avslutande diskussion

Diskutera tillsammans.

- Vad betyder **helhet**?
- Vad betyder **del**?
- Vilket tal är **nämnaren** i 3 / **4**?
- Vilket tal är **täljaren** i **3** / **4**?
- Varför fungerar uttrycket `360 / helhet`?
- Varför behövs en loop?
- Vad händer om **del** blir större än **helhet**?

----------

## Uppföljning av lärandemålen

Nu har du tränat på att:

- använda variabler
- beskriva bråk med **del** och **helhet**
- koppla **del** till täljare
- koppla **helhet** till nämnare
- koppla bråk till vinklar
- använda en loop
- använda Finch för att visualisera matematik

----------

## Bonus – Så här kan du utmana dig

Vad händer om du ställer in:

```text
helhet = 4
del = 5
```

Det betyder:

```text
5 / 4
```

Vad tror du Finch kommer att rita?

~hint Behöver du en ledtråd?

Kan ett bråk vara större än 1?

Vad betyder:

```text
5 / 4
```

Hur många hela cirklar och tårtbitar motsvarar det?

hint~
