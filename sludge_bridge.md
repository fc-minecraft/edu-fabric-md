### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Bridge Builder

## Step 1  
Используй курсор, чтобы включить все огни. Когда все огни загорятся, дверь откроется.  

#### ~ tutorialhint  
Используй "перемещение курсора", чтобы выбрать свет, затем "разместить блок", чтобы его зажечь. Использование цикла упростит код, но это не обязательно.  



```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.placeBlock()
    for (let index = 0; index < 2; index++) {    }
```
```template
    hoc22.placeBlock()
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```