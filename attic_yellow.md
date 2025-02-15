### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Attic Tutorial

## Step 1
Агенту хватило энергии, чтобы открыть Зеленую дверь. Если ты разгадаешь, как открыть световой люк, Агент сможет зарядиться еще больше и открыть Желтую дверь.  

#### ~ tutorialhint 
Посмотри выше Агента и используй блок "перемещение курсора", чтобы переместить курсор над каждым люком, а затем "открыть дверь-ловушку", чтобы их открыть. Используй цветные стрелки, чтобы выбрать правильное направление движения курсора.  



```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.openTrapdoor()
```
```template
    hoc22.openTrapdoor()
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```