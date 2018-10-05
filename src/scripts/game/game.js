import WorldRenderer from './worldRenderer';
import Player from './models/Player';

export default {
    init: () => {
        WorldRenderer.init((game) => {
            let player = new Player(0);
            game.stage.addChild(player.sprite);

            game.ticker.add(() => {
                player.goRight();
            });
        });
    }
};