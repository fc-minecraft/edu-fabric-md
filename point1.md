### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Check Cocoa and Stop

## Step 1
Соберите блоки в правильной последовательности, чтобы пройти дальше.

#### ~ tutorialhint
Используйте блоки **"проверить <предмет> <знак> <количество>"** и **"прекратить подачу"**, чтобы проверить условие и продолжить.

```hidden
myCustomBlocks.setExpectedValues(Item.CocoaBeans, 10);
```
```ghost
if (myCustomBlocks.getItemCount(Item.CocoaBeans) >= 10) {
    myCustomBlocks.stopBlock();
}
```

```template
if (myCustomBlocks.getItemCount(Item.CocoaBeans) >= 10) {
    myCustomBlocks.stopBlock();
}
```

```package
minecraft-hoc22=github:fc-minecraft/edu-fabric-ts#v0.0.23
```
