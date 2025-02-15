### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Cracked Wall

## Step 1  
Саду нужно больше воды! Используй курсор, чтобы сломать несколько поврежденных кирпичей и позволить воде течь дальше.  

#### ~ tutorialhint  
Используй "перемещение курсора", чтобы поставить курсор в нужное место, а затем "сломать блок", чтобы разрушить кирпич. Сломай все 4 блока, чтобы набрать достаточно воды для следующей головоломки.  


```ghost
    hoc22.cursorMoveOrientationOneUp(1)
    hoc22.cursorMoveOrientationOneDown(1)
    hoc22.cursorMoveOrientationOneLeft(1)
    hoc22.cursorMoveOrientationOneRight(1)
    hoc22.breakBlock()
```
```template
    hoc22.cursorMoveOrientationOneDown(1) 
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```