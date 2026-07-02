# Följ den svarta linjen – Programmera en självkörande Finch

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Kort introduktion

I den här övningen ska du programmera Finch att följa en svart linje med hjälp av sina [linjesensorer](#word "En linjesensor känner av skillnaden mellan ljusa och mörka underlag.").

Du kommer att undersöka hur [sensorer](#word "En sensor samlar in information från omgivningen.") fungerar, välja ett [tröskelvärde](#word "Ett tröskelvärde är ett gränsvärde som används för att fatta ett beslut.") och använda [villkor](#word "Ett villkor låter programmet välja vad som ska hända beroende på en situation.") för att styra robotens rörelser.

Målet är att förstå hur en robot använder [återkoppling](#word "Återkoppling innebär att roboten hela tiden läser sina sensorer och anpassar sitt beteende efter informationen.") för att fatta beslut.

---

## Lärandemål

Efter övningen ska du kunna:

- förstå hur en linjesensor fungerar
- använda sensordata för att fatta beslut
- programmera villkor med **om** och **annars**
- testa och förbättra ett program
- förstå hur återkoppling används i robotar

---

## Begrepp

### Teknik

- [sensor](#word "En sensor samlar in information från omgivningen.")
- [linjesensor](#word "En linjesensor känner av skillnaden mellan ljusa och mörka underlag.")
- [återkoppling](#word "Återkoppling innebär att roboten hela tiden läser sina sensorer och anpassar sitt beteende efter informationen.")
- [robot](#word "En robot är en programmerbar maskin som kan utföra uppgifter automatiskt.")
- [tröskelvärde](#word "Ett tröskelvärde är ett gränsvärde som används för att fatta ett beslut.")

### Programmering

- [algoritm](#word "En algoritm är en steg-för-steg-beskrivning av hur ett problem ska lösas.")
- [villkor](#word "Ett villkor låter programmet välja vad som ska hända beroende på en situation.")
- [sensorvärde](#word "Sensorvärden är de tal som sensorerna skickar till programmet.")
- [loop](#word "En loop upprepar samma kod flera gånger.")
- [felsökning](#word "Att felsöka betyder att undersöka varför ett program inte fungerar som tänkt och sedan förbättra det.")

---

## Material

- Finch Robot 2.0
- micro:bit
- svart eltejp eller svart linje
- ljust underlag

---

## Steg 1 – Starta Finch

Öppna `||finch:Finch||` och lägg till blocket **start Finch**.

```blocks
finch.startFinch()
```

---

## Testa

Ladda ner programmet.

Kontrollera att Finch ansluter.

---

## Steg 2 – Undersök vänster linjesensor

Öppna `||basic:Grundläggande||` och lägg till blocket `||basic:för alltid||`.

Öppna sedan `||finch:Finch||` och visa värdet från den vänstra linjesensorn med `||basic:visa siffra||`.

```blocks
finch.startFinch()

basic.forever(function () {
    basic.showNumber(finch.getLine(RLDir.Left))
})
```

---

## Testa

Placera sensorn över:

- vitt underlag
- svart tejp

Vad händer med [sensorvärdet](#word "Sensorvärden är de tal som sensorerna skickar till programmet.")?

Skriv gärna upp resultaten.

| Underlag | Sensorvärde |
|-----------|------------:|
| Vitt | |
| Svart | | |

---

## Steg 3 – Undersök höger linjesensor

Ändra programmet så att `||basic:visa siffra||` visar den högra linjesensorn istället.

```blocks
finch.startFinch()

basic.forever(function () {
    basic.showNumber(finch.getLine(RLDir.Right))
})
```

---

## Testa

Jämför de båda sensorerna.

- Får du ungefär samma värden?
- Varför tror du att de skiljer sig ibland?

---

## Steg 4 – Välj ett tröskelvärde @unplugged

Nu ska du välja ett [tröskelvärde](#word "Ett tröskelvärde är ett gränsvärde som används för att fatta ett beslut. Till exempel: "är talet större eller mindre än 5"").

Ett vanligt exempel är:

```text
50
```

Sensorvärden påverkas av:

- ljuset i klassrummet
- underlaget
- robotens höjd över golvet

Det betyder att du kan behöva prova dig fram tills roboten fungerar bra.

---

## Steg 5 – Sväng när vänster sensor hittar linjen

Öppna `||logic:Logik||` och lägg till blocket `||logic:om||`.

Programmet ska kontrollera om den vänstra linjesensorn ser den svarta linjen.

Om den gör det ska vänster hjul köra lite långsammare än höger.

```blocks
finch.startFinch()

basic.forever(function () {
    if (finch.getLine(RLDir.Left) < 50) {
        finch.startMotors(10, 20)
    }
})
```

---

## Testa

Placera vänster sensor över den svarta linjen.

- Hur svänger roboten?
- Varför tror du att den svänger just åt det hållet?

---

## Steg 6 – Lägg till höger sensor

Lägg till ytterligare ett villkor med `||logic:annars om||`.

Nu ska roboten kunna svänga åt båda hållen beroende på vilken sensor som ser linjen.

```blocks
finch.startFinch()

basic.forever(function () {
    if (finch.getLine(RLDir.Left) < 50) {
        finch.startMotors(10, 20)
    } else if (finch.getLine(RLDir.Right) < 50) {
        finch.startMotors(20, 10)
    }
})
```

---

## Testa

Flytta roboten över linjen.

- Vad händer när vänster sensor ser linjen?
- Vad händer när höger sensor ser linjen?

---

## Steg 7 – Kör framåt när båda sensorerna ser vitt

Lägg till blocket `||logic:annars||`.

När ingen av sensorerna ser den svarta linjen ska roboten köra rakt fram.

```blocks
finch.startFinch()

basic.forever(function () {
    if (finch.getLine(RLDir.Left) < 50) {
        finch.startMotors(10, 20)
    } else if (finch.getLine(RLDir.Right) < 50) {
        finch.startMotors(20, 10)
    } else {
        finch.startMotors(20, 20)
    }
})
```

---

## Testa

Bygg en enkel bana med svart tejp.

Kan Finch följa linjen?

Om inte:

- prova ett annat tröskelvärde
- prova en lägre hastighet
- kontrollera att sensorerna passerar över linjen

Nu är det dags att [felsöka](#word "Att felsöka betyder att undersöka varför ett program inte fungerar som tänkt och sedan förbättra det.") och förbättra din lösning.

---

## Avslutande test

Bygg en bana med:

- en rak sträcka
- en kurva
- en S-sväng

Kan roboten följa hela banan?

Vad behövde du ändra för att få den att fungera bättre?

---

## Avslutande diskussion

Diskutera tillsammans.

- Hur vet roboten var linjen finns?
- Vad används sensorer till?
- Varför behöver roboten fatta beslut hela tiden?
- Hur påverkade tröskelvärdet robotens beteende?
- Hur skulle riktiga självkörande fordon använda samma idé?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- använda linjesensorer
- läsa sensorvärden
- använda villkor
- styra motorer
- testa och förbättra ett program
- förstå hur en robot använder återkoppling för att följa en bana

---

## Bonus – Så här kan du utmana dig

- Få roboten att köra snabbare.
- Testa olika breda linjer.
- Testa svart papper istället för tejp.
- Bygg en svårare bana med fler kurvor.
- Kan du få roboten att följa en bana med ett vägskäl?