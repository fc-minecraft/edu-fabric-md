### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Bookcase Staircase

## Step 1  
Похоже, наверху книжного шкафа что-то есть. Попробуй найти способ, чтобы добраться туда.  

#### ~ tutorialhint  
Используй "перемещение курсора", чтобы выбрать положение вдоль шкафа, а затем "разместить блок", чтобы поставить блок в этом месте. Построй лестницу, чтобы добраться до верха.  


```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.placeBlock()
    for (let index = 0; index < 4; index++) {    }

```
```template
    hoc22.placeBlock()        
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```