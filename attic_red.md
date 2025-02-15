### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Attic Tutorial

## Step 1
Чтобы открыть Красную дверь, тебе и Агенту нужно работать вместе. Опусти рычаг, чтобы поднять железную стену, затем перемести Агента так, чтобы он оказался над золотыми блоками перед Красной дверью.  

#### ~ tutorialhint  
Опусти рычаг вниз, чтобы поднять железную стену, затем перемести Агента на 14 блоков вперед с помощью "перемещение агента"



```ghost
    hoc22.agentMove(SixDirection.Up, 1)
```
```template
    hoc22.agentMove(SixDirection.Forward, 1)     
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```