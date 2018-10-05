let loginWindow;
let usernameField;
let passwordField;
let loginButton;

const handleLogin = (cb, usernameField) => {
    loginWindow.style.display = 'none';
    // API REQUEST here
    cb(true, {
        username: usernameField.value,
        player: {
            id: 0
        }
    });
};


export default (cb) => {
    loginWindow = document.querySelector('#login-window');
    usernameField = document.querySelector('#login-window #username');
    passwordField = document.querySelector('#login-window #password');
    loginButton = document.querySelector('#login-window #login-button');

    loginWindow.style.display = 'block';
    loginButton.onclick = () => handleLogin(cb, usernameField, passwordField);
};