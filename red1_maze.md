### @flyoutOnly true
### @hideIteration true
### @explicitHints true


# Maze

## Step 1  
Дворецкому Эндермена нужна помощь, чтобы пройти через лабиринт к Изумрудным блокам на другой стороне. Рычаги на стене, похоже, соответствуют цветам дверей. Когда ты переключаешь рычаг, одна дверь открывается, а другая закрывается.  

#### ~ tutorialhint  
Создай путь к Изумрудным блокам, используя рычаги. Будь осторожен! Открывая одну дверь, ты закрываешь другую. Затем используй "переместить", чтобы провести его через лабиринт к Изумрудным блокам.  



```ghost
    hoc22.npcMoveForward(1)
    hoc22.npcMoveBack(1)
    hoc22.npcMoveLeft(1)
    hoc22.npcMoveRight(1)
```
```template
    hoc22.npcMoveForward(1)
```
```package
minecraft-hoc22=github:fc-minecraft/hoc22-ts#v0.0.5
```