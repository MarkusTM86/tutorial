# Hur långt körde Finch? – Mät med hjulens encoder

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Kort introduktion

Hur vet en robot hur långt den har kört?

I den här övningen ska du använda hjulens [encoder](#word "En encoder är en sensor som mäter hur mycket ett hjul har roterat.") för att undersöka hur roboten mäter sin egen rörelse.

Du kommer att jämföra [encodervärden](#word "Det tal som encodern skickar till programmet.") med verkliga avstånd och undersöka sambandet mellan dem.

Målet är att förstå hur robotar kan mäta avstånd utan att använda en linjal.

---

## Lärandemål

Efter övningen ska du kunna:

- förklara vad en encoder är
- läsa ett encodervärde
- jämföra encodervärden med verkliga avstånd
- samla in och tolka mätdata
- resonera om hur robotar mäter sträckor

---

## Begrepp

### Teknik

- [encoder](#word "En sensor som mäter hur mycket ett hjul har roterat.")
- [sensor](#word "En sensor samlar in information från omgivningen eller roboten.")
- [rotation](#word "Ett helt varv runt sin egen axel.")

### Matematik

- [sträcka](#word "Hur långt något har förflyttat sig.")
- [mätning](#word "Att bestämma storleken på något.")
- [tabell](#word "Ett sätt att samla och jämföra information.")

### Programmering

- [variabel](#word "En plats där ett värde kan sparas.")
- [sensorvärde](#word "Det tal som en sensor skickar till programmet.")

---

## Material

- Finch Robot 2.0
- micro:bit
- Måttband eller meterstock
- Maskeringstejp

---

## Steg 1 – Starta Finch

Öppna `||finch:Finch||` och lägg till blocket **start Finch**.

```blocks
finch.startFinch()
```

---

## Steg 2 – Visa vänster encoder

Öppna `||basic:Grundläggande||` och lägg till `||basic:för alltid||`.

Visa vänster encoders värde med `||basic:visa siffra||`.

```blocks
finch.startFinch()

basic.forever(function () {
    basic.showNumber(finch.getEncoder(RLDir.Left))
})
```

---

## Testa

Rulla roboten långsamt framåt.

- Vad händer med värdet?
- Blir det större?
- Vad händer när du rullar bakåt?

---

## Steg 3 – Visa höger encoder

Ändra programmet så att den högra encodern visas.

```blocks
finch.startFinch()

basic.forever(function () {
    basic.showNumber(finch.getEncoder(RLDir.Right))
})
```

---

## Testa

- Ger båda hjulen samma värde?
- Varför kan de skilja sig åt?

---

## Steg 4 – Kör en bestämd sträcka

Nu ska Finch köra framåt.

Öppna `||finch:Finch||` och lägg till blocket **kör framåt**.

```blocks
finch.startFinch()

input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 20, 20)
})
```

---

## Testa

Mät hur långt Finch verkligen kör.

Stämmer det med 20 cm?

---

## Steg 5 – Läs av encodern

När roboten har kört klart ska du läsa av encodern.

Skriv upp värdet.

| Körd sträcka (cm) | Encoder |
|------------------:|--------:|
| 20 | | |

---

## Steg 6 – Undersök fler sträckor

Ändra körsträckan.

Prova:

- 10 cm
- 30 cm
- 50 cm

Fyll i tabellen.

| Körd sträcka (cm) | Encoder |
|------------------:|--------:|
| 10 | |
| 20 | |
| 30 | |
| 50 | | |


---

## Testa

Fundera.

- Vad händer med encodern när sträckan blir längre?
- Ser du något mönster?

---

## Steg 7 – Gör en uppskattning @unplugged

Titta på tabellen.

Kan du gissa:

Hur stort encodervärde behövs för att köra 100 cm?

Skriv din gissning.

---

## Avslutande test

Kör Finch ungefär 75 cm.

Mät sedan den verkliga sträckan.

Hur nära kom du?

---

## Avslutande diskussion

Diskutera tillsammans.

- Vad mäter encodern egentligen?
- Varför är encoder inte samma sak som centimeter?
- Varför kan två robotar ge lite olika värden?
- Hur skulle en självkörande robot kunna använda encoders?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- använda en encoder
- läsa sensorvärden
- mäta sträckor
- samla data i en tabell
- jämföra mätningar
- undersöka samband mellan encoder och verklig sträcka

---

## Bonus – Så här kan du utmana dig

Kan du ta reda på hur många encoderenheter som motsvarar **1 centimeter**?

När du vet det kan du skapa en egen omvandlingstabell.

| Centimeter | Encoder |
|-----------:|--------:|
| 1 | | 
| 5 | | 
| 10 | | 
| 20 | | 
| 50 | | | 

Kan du sedan förutsäga vilket encodervärde som behövs för att köra **2 meter**?