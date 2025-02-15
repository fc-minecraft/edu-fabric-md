### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Wrong Reflection

## Step 1  
Тыквы над камином в зеркале чем-то отличаются от тех, что в этой комнате. Попробуй сделать их одинаковыми.  

#### ~ tutorialhint  
Используй "перемещение курсора", чтобы выбрать положение над камином, затем "разместить тыкву", чтобы поставить тыкву в нужное место.  

```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.placePumpkin()
    for (let index = 0; index < 2; index++) {}

```
```template
    hoc22.cursorMoveOrientationOneLeft(1)
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```