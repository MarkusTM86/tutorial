# Fjärrstyr Finch – Sändare och mottagare

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Kort introduktion

I den här övningen ska du göra en [fjärrstyrd robot](#word "En robot som styrs på avstånd.").

Du behöver två micro:bits:

- en [sändare](#word "Den micro:bit som skickar meddelanden med radio.")
- en [mottagare](#word "Den micro:bit som tar emot meddelanden och styr Finch.")

Sändaren skickar [radiomeddelanden](#word "Meddelanden som skickas trådlöst mellan micro:bits.") till mottagaren.

Mottagaren sitter i Finch och styr robotens rörelser.

---

## Lärandemål

Efter övningen ska du kunna:

- förklara skillnaden mellan sändare och mottagare
- använda radio för att skicka kommandon
- styra Finch med meddelanden
- använda villkor för att välja rörelse
- testa och förbättra ett styrsystem

---

## Begrepp

- [sändare](#word "Den micro:bit som skickar information.")
- [mottagare](#word "Den micro:bit som tar emot information.")
- [radio](#word "Ett sätt att skicka information trådlöst.")
- [radiogrupp](#word "Ett nummer som gör att rätt micro:bits lyssnar på varandra.")
- [kommando](#word "Ett meddelande som säger vad roboten ska göra.")
- [villkor](#word "Ett villkor låter programmet välja vad som ska hända.")

---

## Material

- Finch Robot 2.0
- två micro:bits
- USB-kabel
- batteri till sändarens micro:bit

---

## Del 1 – Programmera sändaren

Den första micro:biten ska vara fjärrkontrollen.

---

## Steg 1 – Välj radiogrupp

Öppna `||radio:Radio||` och lägg till `||radio:set group||`.

Båda micro:bits måste ha samma radiogrupp.

```blocks
radio.setGroup(7)
```

---

## Steg 2 – Skicka framåt

Öppna `||input:Indata||`.

Lägg till `||input:när knapp A+B trycks||`.

Skicka texten `"fram"` med radio.

```blocks
radio.setGroup(7)

input.onButtonPressed(Button.AB, function () {
    radio.sendString("fram")
})
```

---

## Steg 3 – Skicka vänster och höger

Knapp A ska skicka `"vanster"`.

Knapp B ska skicka `"hoger"`.

```blocks
radio.setGroup(7)

input.onButtonPressed(Button.AB, function () {
    radio.sendString("fram")
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("vanster")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("hoger")
})
```

---

## Steg 4 – Skicka stopp och bakåt

Tryck på loggan för stopp.

Skaka micro:biten för att skicka bakåt.

```blocks
radio.setGroup(7)

input.onButtonPressed(Button.AB, function () {
    radio.sendString("fram")
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("vanster")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("hoger")
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("stopp")
})

input.onGesture(Gesture.Shake, function () {
    radio.sendString("bak")
})
```

---

## Testa sändaren

Ladda ner programmet till den första micro:biten.

Detta är din fjärrkontroll.

---

## Del 2 – Programmera mottagaren

Nu ska du programmera micro:biten som sitter i Finch.

Skapa ett nytt MakeCode-projekt.

---

## Steg 5 – Starta Finch och radio

Öppna `||finch:Finch||` och starta Finch.

Öppna `||radio:Radio||` och välj samma radiogrupp som sändaren.

```blocks
radio.setGroup(7)
finch.startFinch()
```

---

## Steg 6 – Ta emot ett kommando

Öppna `||radio:Radio||`.

Lägg till blocket för att ta emot en text.

Visa texten på displayen.

```blocks
radio.setGroup(7)
finch.startFinch()

radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```

---

## Testa

Tryck på knapparna på sändaren.

Visas orden på mottagarens display?

Om inget händer:

- kontrollera att båda använder radiogrupp 7
- kontrollera att båda micro:bits har ström
- kontrollera att rätt program finns på rätt micro:bit

---

## Steg 7 – Kör framåt

Öppna `||logic:Logik||`.

Lägg till ett villkor som kontrollerar om meddelandet är `"fram"`.

```blocks
radio.setGroup(7)
finch.startFinch()

radio.onReceivedString(function (receivedString) {
    if (receivedString == "fram") {
        finch.setMove(MoveDir.Forward, 5, 20)
    }
})
```

---

## Steg 8 – Lägg till bakåt

Lägg till `||logic:annars om||`.

Om kommandot är `"bak"` ska Finch backa.

```blocks
radio.setGroup(7)
finch.startFinch()

radio.onReceivedString(function (receivedString) {
    if (receivedString == "fram") {
        finch.setMove(MoveDir.Forward, 5, 20)
    } else if (receivedString == "bak") {
        finch.setMove(MoveDir.Backward, 5, 20)
    }
})
```

---

## Steg 9 – Lägg till vänster och höger

Nu ska Finch kunna svänga.

```blocks
radio.setGroup(7)
finch.startFinch()

radio.onReceivedString(function (receivedString) {
    if (receivedString == "fram") {
        finch.setMove(MoveDir.Forward, 5, 20)
    } else if (receivedString == "bak") {
        finch.setMove(MoveDir.Backward, 5, 20)
    } else if (receivedString == "vanster") {
        finch.setTurn(RLDir.Left, 30, 20)
    } else if (receivedString == "hoger") {
        finch.setTurn(RLDir.Right, 30, 20)
    }
})
```

---

## Steg 10 – Lägg till stopp

Om mottagaren får kommandot `"stopp"` ska motorerna stanna.

```blocks
radio.setGroup(7)
finch.startFinch()

radio.onReceivedString(function (receivedString) {
    if (receivedString == "fram") {
        finch.setMove(MoveDir.Forward, 5, 20)
    } else if (receivedString == "bak") {
        finch.setMove(MoveDir.Backward, 5, 20)
    } else if (receivedString == "vanster") {
        finch.setTurn(RLDir.Left, 30, 20)
    } else if (receivedString == "hoger") {
        finch.setTurn(RLDir.Right, 30, 20)
    } else if (receivedString == "stopp") {
        finch.stopMotors()
    }
})
```

---

## Testa fjärrstyrningen

Använd sändaren:

- A+B = framåt
- A = vänster
- B = höger
- skaka = bakåt
- logga = stopp

Kan du styra Finch genom en bana?

---

## Avslutande diskussion

- Varför måste båda micro:bits ha samma radiogrupp?
- Vad är skillnaden mellan sändare och mottagare?
- Varför använder vi text som kommandon?
- Vad händer om mottagaren får ett kommando den inte känner igen?
- Hur kan styrningen förbättras?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- använda radio mellan två micro:bits
- skapa en sändare och en mottagare
- skicka kommandon
- använda villkor
- styra Finch med programmering

---

## Bonus – Så här kan du utmana dig

- Ändra hur långt Finch kör framåt.
- Ändra hur många grader Finch svänger.
- Lägg till ljus i näbben för varje kommando.
- Gör en hinderbana och kör igenom den.
- Skapa egna kommandon.