# Bråk med Finch: del av helhet

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Steg 1: Starta Finch

Lägg till blocket `||finch:start Finch||`.

```blocks
finch.startFinch()
```

## Steg 2: Skapa variabler

Gå till `||variables:Variables||` och skapa tre variabler:

- `del`
- `helhet`
- `varv`

```blocks
let del = 0
let helhet = 0
let varv = 0
```

## Steg 3: Ge startvärden

Sätt `del` och `helhet` till **1**.

```blocks
del = 1
helhet = 1
```

## Steg 4: Räkna ut vinkeln

Gå till `||math:Math||`.

Ett helt varv är **360 grader**.

Sätt `varv` till `360 / helhet`.

```blocks
varv = 360 / helhet
```

## Steg 5: Knapp A

Gå till `||input:Input||` och lägg till blocket för knapp **A**.

```blocks
input.onButtonPressed(Button.A, function () {
	
})
```

## Steg 6: Öka helheten

Gå till `||variables:Variables||`.

Inuti knapp A: ändra `helhet` med **1**.

```blocks
input.onButtonPressed(Button.A, function () {
    helhet += 1
})
```

## Steg 7: Räkna om vinkeln

När helheten ändras behöver `varv` räknas om.

```blocks
input.onButtonPressed(Button.A, function () {
    helhet += 1
    varv = 360 / helhet
})
```

## Steg 8: Visa helheten

Gå till `||basic:Basic||` och visa värdet på displayen.

```blocks
input.onButtonPressed(Button.A, function () {
    helhet += 1
    varv = 360 / helhet
    basic.showNumber(helhet)
})
```

## Steg 9: Knapp B

Gå till `||input:Input||` och lägg till blocket för knapp **B**.

```blocks
input.onButtonPressed(Button.B, function () {
	
})
```

## Steg 10: Öka delen

Gå till `||variables:Variables||`.

Inuti knapp B: ändra `del` med **1**.

```blocks
input.onButtonPressed(Button.B, function () {
    del += 1
})
```

## Steg 11: Visa delen

Gå till `||basic:Basic||` och visa värdet på displayen.

```blocks
input.onButtonPressed(Button.B, function () {
    del += 1
    basic.showNumber(del)
})
```

## Steg 12: Loggan startar

Gå till `||input:Input||` och lägg till blocket för loggan.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
```

## Steg 13: Lägg till paus

Gå till `||basic:Basic||` och lägg till en paus i början.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
})
```

## Steg 14: Upprepa

Gå till `||loops:Loops||`.

Loopen ska upprepas lika många gånger som värdet i `del`.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    for (let index = 0; index < del; index++) {
    	
    }
})
```

## Steg 15: Sväng

Gå till `||finch:Finch||`.

Inuti loopen: låt Finch svänga höger.

Vinkeln ska vara `varv`.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    for (let index = 0; index < del; index++) {
        finch.setTurn(RLDir.Right, varv, 10)
    }
})
```

## Steg 16: Kör framåt

Gå till `||finch:Finch||`.

Lägg till att Finch kör framåt.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    for (let index = 0; index < del; index++) {
        finch.setTurn(RLDir.Right, varv, 10)
        finch.setMove(MoveDir.Forward, 10, 10)
    }
})
```

## Steg 17: Backa tillbaka

Gå till `||finch:Finch||`.

Lägg till en rörelse bakåt.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(200)
    for (let index = 0; index < del; index++) {
        finch.setTurn(RLDir.Right, varv, 10)
        finch.setMove(MoveDir.Forward, 10, 10)
        finch.setMove(MoveDir.Backward, 10, 10)
    }
})
```

## Steg 18: Nollställ med A+B

Gå till `||input:Input||` och lägg till blocket för knapp **A+B**.

```blocks
input.onButtonPressed(Button.AB, function () {
	
})
```

## Steg 19: Återställ värden

Gå till `||variables:Variables||`.

Sätt `del` och `helhet` till **1**.

```blocks
input.onButtonPressed(Button.AB, function () {
    del = 1
    helhet = 1
})
```

## Steg 20: Räkna om varv

Avsluta med att räkna om `varv`.

```blocks
input.onButtonPressed(Button.AB, function () {
    del = 1
    helhet = 1
    varv = 360 / helhet
})
```

## Testa

Tryck **A** tills displayen visar `4`.

Tryck **B** tills displayen visar `3`.

Tryck på **loggan**.

Finch visar nu **3/4 av ett helt varv**.