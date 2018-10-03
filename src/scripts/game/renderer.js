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
  
    //Add the cat to the stage
    app.stage.addChild(cat);

    app.ticker.add(() => {
        cat.position.x++;
    });
};

export default {
    init: () => {
        app = new PIXI.Application({ 
            width: 256,         // default: 800
            height: 256,        // default: 600
            antialias: true,    // default: false
            transparent: false, // default: false
            resolution: 1       // default: 1
        });
        
        document.body.appendChild(app.view);
        app.renderer.view.style.position = 'absolute';
        app.renderer.view.style.display = 'block';
        app.renderer.autoResize = true;
        app.renderer.resize(window.innerWidth, window.innerHeight);

        load();
    }
};