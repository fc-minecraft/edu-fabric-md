### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Pipes

## Step 1  
Тебе нужно добавить определенное количество блоков в каждую воронку. Может, в комнате есть что-то, что подскажет, сколько блоков нужно?  

#### ~ tutorialhint  
Посчитай, сколько блоков находится на площадке позади головоломки. Используй "призвать блок", чтобы добавить нужное количество блоков в воронки.  



```ghost
    hoc22.summonColoredBlockMagenta(1)
    hoc22.summonColoredBlockLightBlue(1)
    hoc22.summonColoredBlockYellow(1)
    hoc22.summonColoredBlockLime(1)
```
```template
    hoc22.summonColoredBlockYellow(1)
      
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```