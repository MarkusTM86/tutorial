# Hastighet, körsträcka och proportionalitet

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Kort introduktion

I den här laborationen ska du använda det du redan lärt dig om [variabler](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.").

Nu ska du undersöka sambandet mellan [hastighet](#word "Hastighet beskriver hur snabbt något rör sig.") och [körsträcka](#word "Körsträcka är den sträcka som roboten färdas.").

Du kommer att göra en hypotes, samla mätdata, rita ett [diagram](#word "Ett diagram visar data grafiskt så att samband blir lättare att upptäcka.") och undersöka om sambandet är [proportionellt](#word "Två storheter är proportionella om de ökar eller minskar i samma förhållande.").

---

## Lärandemål

Efter övningen ska du kunna:

- använda en variabel för att styra Finchs hastighet
- göra en rättvis undersökning
- mäta körsträckor
- samla resultat i en tabell
- rita ett diagram
- undersöka om hastighet och körsträcka är proportionella

---

## Begrepp

**Programmering**

- [variabel](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.")
- [parameter](#word "En parameter är ett värde som skickas in till ett block eller en funktion.")
- [händelse](#word "En händelse är något som startar kod, till exempel när en knapp trycks ned.")

**Matematik**

- [proportionalitet](#word "Två storheter är proportionella om de ökar eller minskar i samma förhållande.")
- [diagram](#word "Ett diagram visar data grafiskt.")
- [tabell](#word "En tabell organiserar data i rader och kolumner.")
- [hypotes](#word "En hypotes är en gissning som går att undersöka.")

---

## Material

- Finch Robot 2.0
- micro:bit
- USB-kabel
- Måttband eller linjal
- Papper

---

## Hypotes @unplugged

Innan du programmerar, fundera.

**Vad tror du händer om hastigheten dubbleras?**

□ Körsträckan blir dubbelt så lång.

□ Körsträckan blir lite längre.

□ Jag vet inte.

Skriv gärna ner din gissning.

---

## Steg 1: Skapa variabeln

Öppna kategorin `||variables:Variabler||`.

Skapa variabeln **hastighet**.

Ge den startvärdet **10**.

```blocks
let hastighet = 10
```

---

## Steg 2: Starta Finch

Nu är det dags att använda roboten.

```blocks
let hastighet = 10

finch.startFinch()
```

---

## Steg 3: Ändra hastigheten

Öppna `||input:Indata||`.

Lägg till blocket **när knapp A trycks**.

Öppna `||variables:Variabler||`.

Använd blocket **ändra hastighet med 1**.

Ändra värdet till **10**.

Visa sedan hastigheten på displayen.

Programmet ska nu se ut så här.

```blocks
let hastighet = 10

finch.startFinch()

input.onButtonPressed(Button.A, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})
```

---

## Testa

Tryck på knapp A.

Displayen ska visa

10

20

30

40

50

...

---

## Steg 4: Kör Finch under samma tid

Nu ska roboten alltid köra **lika länge**.

Då blir hastigheten den enda sak som förändras.

Öppna `||input:Indata||`.

Lägg till blocket **när knapp B trycks**.

Lägg sedan till:

- `||basic:paus (ms)||`
- Finch **startMotors**
- `||basic:paus (ms)||`
- Finch **stopMotors**

Programmet ska se ut så här.

```blocks
let hastighet = 10

finch.startFinch()

input.onButtonPressed(Button.A, function () {
    hastighet += 10
    basic.showNumber(hastighet)
})

input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    finch.startMotors(hastighet, hastighet)
    basic.pause(2000)
    finch.stopMotors()
})
```

---

## Testa

Ställ Finch vid startlinjen.

Tryck på B.

Mät hur långt roboten kör.

Varför tror du att vi väntar en sekund innan roboten börjar köra?

---

## Steg 5: Gör en tabell @unplugged

Rita en tabell.

| Hastighet (%) | Tid (s) | Körsträcka (cm) |
|---|---|---|
|10|2||
|20|2||
|30|2||
|40|2||
|50|2||
|60|2||
|70|2||
|80|2||
|90|2||
|100|2||

---

## Steg 6: Samla data @unplugged

För varje hastighet:

1. Tryck på A tills rätt hastighet visas.
2. Ställ Finch vid startlinjen.
3. Tryck på B.
4. Mät körsträckan.
5. Skriv in resultatet i tabellen.

Tips!

Testa gärna varje hastighet två gånger.

---

## Steg 7: Rita ett diagram @unplugged

Rita ett koordinatsystem.

Den vågräta axeln visar

**Hastighet (%)**

Den lodräta axeln visar

**Körsträcka (cm)**

Markera alla mätpunkter.

---

## Steg 8: Undersök resultatet @unplugged

Titta på diagrammet.

Fundera.

- Blir körsträckan längre när hastigheten ökar?
- Ser punkterna ut att ligga på en rak linje?
- Vad händer om hastigheten dubbleras?
- Verkar sambandet vara proportionellt?

---

## Avslutande test

Använd diagrammet.

Försök uppskatta hur långt Finch skulle köra med hastigheten **55 %**.

Testa sedan om din uppskattning stämmer.

---

## Avslutande diskussion

Diskutera tillsammans.

- Var resultaten exakt lika varje gång?
- Vad kan ha påverkat mätningarna?
- Var undersökningen rättvis?
- Hur skulle ni kunna förbättra den?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- använda en variabel
- göra en undersökning
- samla mätdata
- rita diagram
- undersöka proportionalitet

---

## Bonus – Så här kan du utmana dig

Just nu kan hastigheten bli hur stor som helst.

Kan du ändra programmet så att hastigheten alltid hålls mellan **0 %** och **100 %**?

~hint Behöver du en ledtråd?

Efter att hastigheten har ändrats behöver programmet kontrollera värdet.

Du kan använda ett **om-villkor** från `||logic:Logik||`.

```blocks
input.onButtonPressed(Button.A, function () {
    hastighet += 10
    if (hastighet > 100) {
        hastighet = 100
    }
    basic.showNumber(hastighet)
})
```

På samma sätt kan du kontrollera att hastigheten aldrig blir mindre än 0.

hint~
````
