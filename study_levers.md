### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Colored Levers

## Step 1  
Все четыре рычага нужно переключить в правильном порядке и очень быстро, чтобы открыть дверь. Запрограммируй Быстрого Рыцаря, чтобы он быстро переключил рычаги за тебя.  

#### ~ tutorialhint  
Используй "переместить броню", чтобы переместить Быстрого Рыцаря к нужному цвету и активировать рычаг. Обрати внимание на количество ковров – это подскажет тебе правильный порядок.  

```ghost
    hoc22.teleportLightBlueLever()
    hoc22.teleportMagentaLever()
    hoc22.teleportYellowLever()
    hoc22.teleportOrangeLever()
```
```template
    hoc22.teleportLightBlueLever()
```

```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```