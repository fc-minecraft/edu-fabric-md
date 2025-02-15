### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Unlock the Trap

## Step 1  
Сейчас у нас есть шанс поймать Временных Агентов! Нам нужно выровнять все 3 цветных диска, чтобы их запереть.  

#### ~ tutorialhint  
Поверни каждую секцию с помощью "повернуть секцию", чтобы выровнять цветные дорожки между частями. Когда все будет на месте, мы наконец-то сможем остановить Временных Агентов!  


```ghost
    hoc22.outerRingClockwise(1)
    hoc22.outerRingCounterclockwise(1)
    hoc22.middleRingClockwise(1)
    hoc22.middleRingCounterclockwise(1)
    hoc22.innerRingCounterclockwise(1)
    hoc22.innerRingClockwise(1)
```
```template       
    hoc22.outerRingClockwise(1)
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```