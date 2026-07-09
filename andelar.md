# Tårtbitar med Finch – Bråk och andelar

```package
finch=github:BirdBrainTechnologies/pxt-finch
tutorial=github:MarkusTM86/tutorial
```

```template
let helhet = 1
let del = 1

finch.startFinch()

input.onButtonPressed(Button.B, function () {
    helhet += 1
    finch.setBeak(0, 0, 100)
    basic.showNumber(helhet)
})

input.onButtonPressed(Button.A, function () {
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
- [cirkel](#word "En cirkels vinkel är 360 grader.")

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

I koden nedan finns variablerna redan skapade, och knapparnas funktioner är redan programmerade. 

- När du trycker på **B** ökar variabeln helhet, och den blå näbben lyser för att visa att det är helhet som visas.  
- När du trycker på **A** ökar variabeln del, och den gröna näbben visar att det är del som visas.  

Om du trycker på **A+B** samtidigt börjar programmet om, och den vita näbben lyser.  

Varje gång micro:biten visar ett tal hjälper lampans färg dig att se vilken variabel som visas. 

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

## Del och helhet @unplugged

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

## Dags att börja programmera! @unplugged
1. Koppla ihop er microbit med datorn 
2. Ladda ner koden till din microbit 
3. Stoppa in microbiten i roboten och kontrollera att koden funkar som den ska 


## Testa knapparna

Tryck på B.

- Displayen visar **helhet**
- Näbben lyser blå

Tryck på A.

- Displayen visar **del**
- Näbben lyser grön

Ställ sedan in:

- helhet = 4
- del = 3

Det betyder:

3 / 4 - Tre fjärdedelar.

----------

## Steg 1: Skapa logghändelsen

Öppna kategorin `||input:input||`.

Lägg till blocket **Vid nedtryckt på logotyp**. Logotypen/loggan är den ovala symbolen längst upp på microbit och fungerar som en knapp.

![logo](https://raw.githubusercontent.com/markustm86/tutorial/master/images/microbit-logo.png)


```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {

})
```

----------

## Steg 2: Lägg till en paus

Lägg till en kort paus, till exempel 200 [ms](#word "millisekunder, eller tusendelar av en sekund. 1000 ms = 1 sekund"). Då hinner du släppa roboten innan den börjar rita.

Hur tror du att du ska gå till väga för att lägga till en paus? Kom ihåg att du kan ta hjälp av lampan om du behöver.



```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
})
```

----------

## Testa

Ladda ner koden och testa! Tryck på loggan.

Händer något?

Varför inte?

----------

## Rita en liten cirkel

Lägg till specialblocket **rita liten cirkel** i `||specialblock||` efter pausen. Testa med en penna i roboten på ett papper/whiteboard. Glöm inte att trycka på loggan.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    specialblock.ritaLitenCirkel()
})
```
## Hur kan man räkna ut en fjärdedel av cirkeln?

En hel cirkel är **360 grader**.

Om helheten är delad i fyra delar blir varje tårtbit:

```text
360 / 4 = 90°
```
![gradskiva](https://raw.githubusercontent.com/markustm86/tutorial/master/images/gradskiva.png)

Om roboten står i mitten av cirkeln och svänger 90°, har den alltså vridit sig en fjärdedel av cirkeln.  

## Steg 3: Programmera svängen

Lägg till ett svängblock från `||finch||`. Där det står hur många grader Finch ska svänga lägger vi in matematikblocket `||math:0/0||`. Ändra till 360/4 (360 dividerat med 4).  

Hur många grader kommer roboten att svänga efter att den ritat cirkeln och ställt sig i mitten igen? Ladda ner koden och testa!


```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    specialblock.ritaLitenCirkel()
    finch.setTurn(RLDir.Right, 360 / 4, 10)
})
```

----------

## Steg 4: Använd variabel

Nu har vi programmerat roboten att svänga 1/4 varv. Men vi vill att den kan svänga olika mycket, utan att behöva ladda upp ny kod varje gång. 

Därför ska vi använda **variabeln** `||variables:helhet||`. Det är den som ändras varje gång vi trycker på **B**. Till exempel från **3** (tredjedelar) till **4** (fjärdedelar).

Lägg `||variables:helhet||`istället för /4, så att det i matematikblocket står:

```text
360 / helhet
```


```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    specialblock.ritaLitenCirkel()
    finch.setTurn(RLDir.Right, 360 / helhet, 10)
})
```

## Testa

Ladda ned koden och prova att ändra **helhet** genom att trycka på **B**:

```text
helhet = 2
```
Tryck på loggan och se hur mycket roboten svänger.

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
