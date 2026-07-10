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

- skapa och ändra variabler
- använda en variabel i ett program
- använda en variabel för att styra Finch

---

## Begrepp

**Programmering**

- [variabel](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.")
- [värde](#word "Ett värde är information som sparas i en variabel.")
- [händelse](#word "En händelse är något som startar kod, till exempel när micro:biten skakas eller när en knapp trycks ned.")
- [villkor](#word "(Ett villkor hjälper roboten att fatta beslut. Om något stämmer gör den en sak, annars gör den något annat.")

**Matematik**

- [hastighet](#word "Hastighet beskriver hur snabbt något rör sig.")
- [tid](#word "Tid beskriver hur länge något pågår.")

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

Tryck på lampan för att se hur koden kommer att se ut.

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

Välj blocket `||basic:visa siffra||`.

Öppna sedan `||variables:variabler||` och dra in det ovala blocket **steg** i **visa siffra**


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

Öppna kategorin Input och välj `||input:när skaka||`.

Lägg in `||variables:ändra steg med 1||` i **när skaka**. 

Flytta sedan blocket **visa steg** från start till **när skaka**


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

## Stegräknare

Nu har du gjort en stegräknare. Tänk att du har microbit i fickan, och varje gång du tar ett steg skakas den lite, och ett steg adderas. När du vill kan du ta upp microbit och titta hur många steg du tagit hittills. 

Det är en bra sak med variabler. De kan man använda för något som *ändras* hela tiden. 

---

## Ta bort koden

Släng all kod förutom **vid start**, genom att dra den till vänster och släpp den där alla kodblocken finns. 

## Steg 4: Skapa en ny variabel

Nu ska du skapa en ny variabel.

Skapa en `||variables:variabel||` och ge den namnet "hastighet"

Ge variabeln startvärdet **0**.

```blocks
let hastighet = 0

```

---

## Steg 5: Visa hastigheten

Hämta `||input:när knapp A trycks||`.

Lägg in `||input:visa siffra||` i *när knapp A trycks*.

Lägg in variabeln `||variables:hastighet||` i *visa siffra*

Titta på lampan för att se om du gjort rätt.

```blocks
let hastighet = 0

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

Nu ska knapp A inte bara *visa* hastigheten. Den ska också *öka* hastigheten.

Öppna `||variables:ändra hastighet med 1||`.

Ändra värdet från **1** till **10**.

Lägg det innan *visa hastighet*, när man trycker på knapp A. 


```blocks
let hastighet = 0

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
- Vilket värde visas på microbit?

---

## Steg 7: Nu är det dags att använda Finch

Hittills har du bara arbetat med microbiten.

Nu ska Finch använda variabeln **hastighet**.

Lägg först till blocket `||finch:start Finch||` under `||basic:vid start||`

```blocks
let hastighet = 0

finch.startFinch()

input.onButtonPressed(Button.A, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})
```

---

## Steg 8: Låt variabeln styra hjulen

Nu ska vi välja vad som ska hända när **knapp B** trycks (försök lista ut hur)

När knapp B trycks ska roboten börja köra med hjälp blocket ``||finch:Finch wheels L||.``

Använd variabeln **hastighet** som hastighet för båda hjulen.


```blocks
let hastighet = 0

finch.startFinch()

input.onButtonPressed(Button.A, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})

input.onButtonPressed(Button.B, function () {
    finch.startMotors(hastighet, hastighet)
})
```

---

## Testa

1. Tryck på knapp A tills displayen visar en hastighet du vill prova.
2. Tryck på knapp B för att starta hjulen.

Fundera.

- Vad händer om hastigheten är 0?
- Vad händer om hastigheten är större än 0?
- Varför är det viktigt att båda hjulen får samma hastighet?

---

## Steg 9: Kör under en bestämd tid

Nu ska Finch bara köra en kort stund.

Öppna `||basic:Grundläggande||`.

Lägg till blocket **paus (ms)** efter att hjulen har startat.

Sätt pausen till **2000 ms**.

2000 ms betyder 2 sekunder.

Lägg sedan till Finch-blocket **finch stop**.

Programmet ska nu se ut så här.

```blocks
let hastighet = 0

finch.startFinch()

input.onButtonPressed(Button.A, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})

input.onButtonPressed(Button.B, function () {
    finch.startMotors(hastighet, hastighet)
    basic.pause(2000)
    finch.stopMotors()
})
```

---

## Testa

1. Tryck på knapp A för att välja hastighet.
2. Tryck på knapp B.
3. Titta på hur Finch kör och stannar.

Fundera.

- Kör Finch lika länge varje gång?
- Vad är det som förändras när du trycker på A?
- Vad är det som inte förändras?

---

## Avslutande test

Visa att du kan:

- skapa en variabel
- ändra värdet i en variabel
- visa en variabel på displayen
- använda en variabel för att styra Finch
- köra Finch under en bestämd tid

---

## Avslutande diskussion

Diskutera tillsammans.

- Vad är en variabel?
- Vad är skillnaden mellan variablerna **steg** och **hastighet**?
- Varför är det smartare att använda en variabel än att skriva in ett nytt tal varje gång?
- Hur hjälpte variabeln Finch att köra olika snabbt?
- Varför kan det vara användbart att köra roboten under samma tid varje gång?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- skapa variabler
- ändra variabler
- använda en händelse som startar kod
- använda en variabel för att styra en robot
- styra robotens rörelse med hastighet och tid

---

## Bonus – Så här kan du utmana dig

Kan du skapa en knapp som minskar hastigheten med 10?

Hur kan du se till att hastigheten aldrig blir mindre än 0 eller större än 100?

~hint Behöver du en ledtråd?

Tänk efter innan du fortsätter.

När du ändrar hastigheten behöver programmet kontrollera att värdet fortfarande är giltigt.

Du kan använda ett **om-villkor** från `||logic:Logik||`.

Exempel när hastigheten ökar:

```blocks
input.onButtonPressed(Button.A, function () {
    hastighet += 10
    if (hastighet > 100) {
        hastighet = 100
    }
    basic.showNumber(hastighet)
})
```

Exempel när hastigheten minskar:

```blocks
input.onButtonPressed(Button.B, function () {
    hastighet += -10
    if (hastighet < 0) {
        hastighet = 0
    }
    basic.showNumber(hastighet)
})
```

På så sätt hålls hastigheten mellan **0 %** och **100 %**.

hint~
````