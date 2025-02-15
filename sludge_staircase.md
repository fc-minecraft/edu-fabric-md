### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Staircase

## Step 1  
Используй курсор, чтобы построить лестницу и добраться до верхнего уровня!  

#### ~ tutorialhint  
Используй "перемещение курсора" и "разместить блок", чтобы построить лестницу, по которой ты сможешь забраться. Убедись, что ставишь блоки так, чтобы можно было на них запрыгивать. Попробуй изменить готовый код вместо того, чтобы начинать с нуля.  


```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.placeBlock()
    for (let index = 0; index < 2; index++) {}
```
```template
    hoc22.placeBlock()
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```