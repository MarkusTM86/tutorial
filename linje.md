# Följ kanten av den svarta linjen – Programmera en självkörande Finch

```package
finch=github:BirdBrainTechnologies/pxt-finch
```
```template
finch.startFinch()
```

## Kort introduktion

I den här övningen ska du programmera Finch att följa kanten av en svart linje med hjälp av sin vänstra [linjesensor](#word "En linjesensor känner av skillnaden mellan ljusa och mörka underlag, vilket gör att den kan avgöra vad som är linjen och vad som är bakgrunden.").

Håll muspekaren över de blå begreppen för att läsa förklaringar.

Roboten ska hela tiden försöka hålla den svarta linjen på sin vänstra sida.

Du kommer att använda ett [tröskelvärde](#word "Ett tröskelvärde är ett bestämt värde som roboten jämför med. Om värdet blir högre eller lägre än gränsen gör roboten något annat.") och ett [villkor](#word "Ett villkor hjälper roboten att fatta beslut. Om något stämmer gör den en sak, annars gör den något annat.").

När Finch läser av sensorn och ändrar riktning får den [återkoppling](#word "Återkoppling innebär att roboten hela tiden läser in information från sina sensorer och anpassar sitt beteende efter det den känt av.").

---

## Lärandemål

Efter övningen ska du kunna:

* förstå hur en linjesensor fungerar
* förstå hur en robot kan rätta sig själv med hjälp av sina sensorer
* programmera villkor med **om** och **annars**
* testa och förbättra ett program

---

## Begrepp

### Teknik

* [sensor](#word "En sensor samlar in information från omgivningen.")
* [linjesensor](#word "En linjesensor känner av skillnaden mellan ljusa och mörka underlag, vilket gör att den kan avgöra vad som är linjen och vad som är bakgrunden.")
* [återkoppling](#word "Återkoppling innebär att roboten hela tiden läser in information från sina sensorer och anpassar sitt beteende efter det den känt av.")
* [robot](#word "En robot är en programmerbar maskin som kan utföra uppgifter automatiskt.")
* [tröskelvärde](#word "Ett tröskelvärde är ett bestämt värde som roboten jämför med. Om värdet blir högre eller lägre än gränsen gör roboten något annat.")

### Programmering

* [algoritm](#word "En algoritm är en steg-för-steg-beskrivning av hur ett problem ska lösas.")
* [villkor](#word "Ett villkor hjälper roboten att fatta beslut. Om något stämmer gör den en sak, annars gör den något annat.")
* [sensorvärde](#word "Ett sensorvärde är ett tal som berättar vad sensorn upptäcker. Roboten använder värdet för att bestämma vad den ska göra.")
* [loop](#word "En loop upprepar samma kod flera gånger.")
* [felsökning](#word "Att felsöka betyder att undersöka varför ett program inte fungerar som tänkt och sedan förbättra det.")

---

## Material

* Finch Robot 2.0
* micro:bit
* USB-kabel till micro:bit
* svart eltejp eller svart linje
* ljust underlag

---

## Steg 1 – Starta Finch

Öppna `||finch:Finch||`.

Lägg till blocket **start Finch**.

```blocks
finch.startFinch()
```

---

## Testa

Ladda ner programmet.

Kontrollera att Finch ansluter.

---

## Steg 2 – Undersök vänster linjesensor

Öppna `||basic:Grundläggande||`.

Hämta blocket `||basic:visa siffra||` och stoppa in det i `||basic:för alltid||`.

Öppna sedan `||finch:Finch||`.

Stoppa in blocket **Finch Right Line** i `||basic:visa siffra||`.

Byt sedan i drop down-menyn från **Right** till **Left**.

```blocks
finch.startFinch()

basic.forever(function () {
    basic.showNumber(finch.getLine(RLDir.Left))
})
```

---

## Testa

Placera den vänstra sensorn över:

* vitt underlag
* svart tejp

Vad händer med [sensorvärdet](#word "Ett sensorvärde är ett tal som berättar vad sensorn upptäcker. Roboten använder värdet för att bestämma vad den ska göra.")?

---

## Steg 3 – Välj tröskelvärde @unplugged

I den här tutorialen använder vi tröskelvärdet:

```text
90
```

Det betyder:

```text
Om vänster linjesensor visar mindre än 90
ser Finch den svarta linjen.
```

Sensorvärden kan ändras beroende på ljus, underlag och hur sensorn läser av ytan.

Ibland kan värdet också förändras lite över tid.

Därför använder vi ett ganska högt tröskelvärde, **90**, så att roboten tydligt kan skilja på linjen och bakgrunden.

---

## Steg 4 – Sväng bort från linjen

Nu ska Finch reagera när den vänstra sensorn ser den svarta linjen.

Om vänster sensor ser linjen ska vänster hjul snurra snabbare än höger hjul.

Då svänger Finch åt höger, alltså bort från linjen.

```blocks
finch.startFinch()

basic.forever(function () {
    if (finch.getLine(RLDir.Left) < 90) {
        finch.startMotors(25, 10)
    }
})
```

---

## Testa

Placera vänster sensor över den svarta linjen.

* Svänger Finch bort från linjen?
* Varför svänger den åt höger när vänster hjul går snabbare?

---

## Steg 5 – Sväng tillbaka mot linjen

Nu ska Finch också veta vad den ska göra när vänster sensor inte ser linjen.

Lägg till `||logic:annars||`.

Om sensorn inte ser linjen ska Finch svänga lite åt vänster för att hitta linjen igen.

```blocks
finch.startFinch()

basic.forever(function () {
    if (finch.getLine(RLDir.Left) < 90) {
        finch.startMotors(25, 10)
    } else {
        finch.startMotors(10, 25)
    }
})
```

---

## Testa

Lägg Finch så att den svarta linjen är vid robotens vänstra sensor.

Finch ska nu röra sig framåt genom att hela tiden småsvänga:

* bort från linjen när den ser svart
* tillbaka mot linjen när den ser ljust

---

## Steg 6 – Gör rörelsen mjukare

Om Finch svänger för kraftigt kan du göra skillnaden mellan hjulen mindre.

Prova till exempel:

```blocks
finch.startFinch()

basic.forever(function () {
    if (finch.getLine(RLDir.Left) < 90) {
        finch.startMotors(22, 14)
    } else {
        finch.startMotors(14, 22)
    }
})
```

---

## Testa

Prova båda programmen.

Vilket fungerar bäst på din bana?

Fundera:

* Kör Finch lugnare?
* Följer den linjen bättre?
* Behöver hastigheten bli lägre eller högre?

---

## Avslutande test

Bygg en bana med:

* en rak sträcka
* en mjuk kurva
* en S-sväng

Placera Finch så att den vänstra linjesensorn följer kanten av den svarta linjen.

Kan roboten följa hela banan?

---

## Avslutande diskussion

Diskutera tillsammans.

* Hur vet Finch om den är över linjen?
* Varför räcker det med en linjesensor i den här lösningen?
* Vad händer när vänster hjul går snabbare än höger hjul?
* Vad händer när höger hjul går snabbare än vänster hjul?
* Varför behöver roboten läsa sensorn om och om igen?
* Hur skulle du förbättra programmet?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

* använda en linjesensor
* läsa sensorvärden
* använda ett tröskelvärde
* använda villkor
* styra motorer
* förstå hur en robot kan rätta sig själv med hjälp av sina sensorer
* testa och förbättra ett program

---

## Bonus – Så här kan du utmana dig

* Testa olika hastigheter.
* Testa olika breda linjer.
* Bygg en svårare bana med fler kurvor.
* Kan du få Finch att följa linjen snabbare utan att tappa bort den?
