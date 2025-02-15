### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Check Cocoa and Stop

## Step 1
Соберите блоки в правильной последовательности, чтобы пройти дальше.

#### ~ tutorialhint
Используйте блоки **"проверить <предмет> <знак> <количество>"** и **"прекратить подачу"**, чтобы проверить условие и продолжить.

```ghost
if (myCustomBlocks.checkBlockCount(Block.Cocoa, ">=", 10)) {
    myCustomBlocks.stopBlock(Block.Cocoa, ">=", 10);
}
```

```template
if (myCustomBlocks.checkBlockCount( , , )) {
    myCustomBlocks.stopBlock( , , );
}
```

```package
minecraft-hoc22=github:fc-minecraft/edu-fabric-ts#v0.0.7
```
