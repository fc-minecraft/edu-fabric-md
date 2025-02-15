### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Flower Planting

## Step 1  
Похоже, в этой клумбе есть какой-то узор. Может быть, вазоны слева и справа подскажут, что делать?  

#### ~ tutorialhint  
Используй "перемещение курсора", чтобы поставить курсор в нужное место, а затем "посадка цветка", чтобы посадить правильный цветок. Заполни всю клумбу, повторяя узор слева и справа, чтобы решить головоломку.  



```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.flowerPlantingRedFlower()
    hoc22.flowerPlantingYellowFlower()
    hoc22.flowerPlantingBlueFlower()
    for (let index = 0; index < 2; index++) {}
```
```template
    hoc22.flowerPlantingBlueFlower() 
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```