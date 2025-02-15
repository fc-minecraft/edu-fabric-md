### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Pull the Lever

## Step 1  
Вот и рычаг! Перемести Агента к рычагу и опусти его вниз!  

#### ~ tutorialhint  
Используй "перемещение агента", чтобы поставить его перед рычагом, а затем "потянуть рычаг вниз", чтобы активировать его!  


```ghost
    hoc22.agentMove(SixDirection.Up, 2)
    hoc22.pullLeverDownLime()
```
```template
    hoc22.agentMove(SixDirection.Forward, 2)
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```