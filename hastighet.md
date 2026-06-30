# Hastighet, körsträcka och proportionalitet

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

```template
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

## Introduktion @showdialog

Programmet finns redan i editorn.

Din uppgift är **inte** att skriva programmet, utan att förstå hur det fungerar och använda det för att undersöka sambandet mellan hastighet och körsträcka.