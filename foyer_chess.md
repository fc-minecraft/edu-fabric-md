### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Chess Pieces

## Step 1  
Мы освободили Короля и Королеву, но дверь все еще не открывается. Похоже, фигуры стоят не на своих местах. Перемести их правильно, чтобы наконец выбраться отсюда!  

#### ~ tutorialhint  
Шахматная доска представляет собой сетку с датами. Осмотри комнату, чтобы понять, на каких датах должны стоять Король и Королева, затем используй "переместить короля" и "переместить королеву", чтобы поставить их на правильные позиции.  


```ghost
    hoc22.kingMove(Custom.ArrowUpOrange, 1)
    hoc22.queenMove(Custom.ArrowUpOrange, 1)

```
```template
    hoc22.kingMove(Custom.ArrowUpOrange, 1)  
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```