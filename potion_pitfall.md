### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Pitfall

## Step 1  
Перемести глиняного голема вперед на 6 блоков. Когда голем наступает на нажимную плиту, она открывает яму на 1 секунду. Подожди, пока блок вернется, прежде чем двигаться дальше.  

#### ~ tutorialhint  
Используй "глиняный голем движется вперед" для передвижения голема. Перемести его вперед на 2 блока, затем используй "дождаться блока", чтобы голем подождал 1 секунду перед следующим движением на 2 блока.  




```ghost
    hoc22.clayGolemMoveForward(1)
    hoc22.waitForBlock()
    for (let index = 0; index < 2; index++) {    }
```
```template
    hoc22.clayGolemMoveForward(1)   
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```