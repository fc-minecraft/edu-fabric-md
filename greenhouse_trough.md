### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Trough

## Step 1  
О нет! Похоже, вода не доходит до сада. Заполни все отверстия, чтобы вода могла течь правильно.  

#### ~ tutorialhint  
Используй "перемещение курсора", чтобы поставить курсор в нужное место, а затем "разместить блок", чтобы заполнить отверстие. Заполни все 6 отверстий над черным бетоном, чтобы продолжить.  



```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.placeBlock()
    for (let index = 0; index < 2; index++) {    }
```
```template
    hoc22.cursorMoveOrientationOneUp(1)     
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```