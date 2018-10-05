import * as PIXI from 'pixi.js';
import catImg from '../../images/cat.png';

let game;
let setup;

const load = () => {
    PIXI.loader
        .add(catImg)
        .load(() => setup(game));
};

export default {
    init: (setupCB) => {
        setup = setupCB;
        game = new PIXI.Application({
            width: 256,
            height: 256,
            antialias: true,
            transparent: false,
            resolution: 1
        });

        document.body.appendChild(game.view);
        game.renderer.view.style.position = 'absolute';
        game.renderer.view.style.display = 'block';
        game.renderer.autoResize = true;
        game.renderer.resize(window.innerWidth, window.innerHeight);

        load();
    }
};