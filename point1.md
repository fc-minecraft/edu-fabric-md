### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Check Cocoa and Stop

## Step 1
Собери блоки в правильной последовательности, чтобы пройти дальше.

#### ~ tutorialhint
Используй блоки **"проверить <предмет> <знак> <количество>"** и **"прекратить подачу"**, чтобы проверить условие и продолжить.

```ghost
if (myCustomBlocks.getItemCount(Item.CocoaBeans, myCustomBlocks.ComparisonOperator.LessOrEqual, 10)) {
    myCustomBlocks.stopBlock();
}
```

```template
if (myCustomBlocks.getItemCount(Item.CocoaBeans, myCustomBlocks.ComparisonOperator.LessOrEqual, 10)) {
    myCustomBlocks.stopBlock();
}
```

```package
minecraft-hoc22=github:fc-minecraft/edu-fabric-ts#v0.0.37
```
