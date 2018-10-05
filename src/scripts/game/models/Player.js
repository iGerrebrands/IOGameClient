import * as PIXI from 'pixi.js';

import catImg from '../../../images/cat.png';

export default class Player {
    constructor(id) {
        this.id = id;
        this.sprite = new PIXI.Sprite(PIXI.loader.resources[catImg].texture);
    }

    goRight() {
        this.sprite.position.x++;
    }
}