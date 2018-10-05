import '../style/index.scss';
import Game from './game/game';
import login from './login/login';

const doLogin = () => {
    login((success, data) => {
        success ? Game.init(data) : doLogin();
    });
};

doLogin();