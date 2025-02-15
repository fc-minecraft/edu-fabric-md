### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Windy Bridge

## Step 1  
Используй курсор, чтобы заблокировать ветер и перейти по мосту.  

#### ~ tutorialhint  
Используй "перемещение курсора", чтобы поставить курсор перед отверстиями, затем "разместить блок", чтобы закрыть их и остановить ветер.  



```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.placeBlock()
```
```template 
    hoc22.placeBlock()
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```