namespace myCustomBlocks {

    /**
     * Проверка количества какао
     */
    //% block="количество какао больше 10"
    export function checkCocoa(): boolean {
        const cocoaCount = blocks.count(Block.Cocoa);
        return cocoaCount > 10;
    }

    /**
     * Блок "стоп"
     */
    //% block="стоп"
    export function stopBlock(): void {
        game.say("Вы достигли блока 'стоп'. Попробуйте еще раз.");
        // Дополнительные действия при остановке
    }

    /**
     * Проверка последовательности блоков
     */
    //% block="проверить последовательность"
    export function checkSequence(): void {
        if (checkCocoa()) {
            game.say("Количество какао больше 10! Вы можете продолжить.");
            // Логика для продолжения
            // Например, открыть дверь или переместить игрока
            blocks.fill(Block.Air, world(0, 0, 0), world(1, 1, 1), FillOperation.Replace);
        } else {
            game.say("Количество какао недостаточно. Попробуйте еще раз.");
            stopBlock();
        }
    }
}
