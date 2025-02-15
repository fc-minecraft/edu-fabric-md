### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Open Doors

## Шаг 1  
Каждое цветное отверстие — это замок для дверей в камеру. Заполни все четыре отверстия соответствующим цветом, чтобы открыть двери и попасть внутрь!  

#### ~ tutorialhint 
Используй блок "перемещение курсора", чтобы переместить курсор в нужное положение, а затем "разместить блок", чтобы заполнить отверстие. Когда все отверстия будут заполнены, двери камеры откроются.  

```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.placeMagentaBlock()
    hoc22.placeLimeBlock()
    hoc22.placeYellowBlock()
    hoc22.placeLightBlueBlock()

```
```template
    hoc22.placeLimeBlock()
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```