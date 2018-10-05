import * as PIXI from 'pixi.js';
import catImg from '../../images/cat.png';

let app;

const load = () => {
    PIXI.loader
        .add(catImg)
        .load(setup);
};

const setup = () => {
    let cat = new PIXI.Sprite(PIXI.loader.resources[catImg].texture);
    
    app.stage.addChild(cat);

    app.ticker.add(() => {
        cat.position.x++;
    });
};

export default {
    init: () => {
        app = new PIXI.Application({
            width: 256,  
            height: 256,  
            antialias: true,
            transparent: false,
            resolution: 1
        });
        
        document.body.appendChild(app.view);
        app.renderer.view.style.position = 'absolute';
        app.renderer.view.style.display = 'block';
        app.renderer.autoResize = true;
        app.renderer.resize(window.innerWidth, window.innerHeight);

        load();
    }
};