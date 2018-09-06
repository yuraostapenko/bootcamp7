const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


let login = prompt('enter your login, must complete from 4 to 16 symbols');

const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }
};


const isLoginUnique = function (allLogins, login) {
       if (allLogins.includes(login)) {
        return false;
    } else {
        return true;
    }
};

const addLogin = function (logins, login) {
    if (isLoginValid(login) === false) {
alert('Error! Login must be from 4 to 16 symbols');
    } else if (isLoginUnique(logins, login) === true) {
            logins.push(login);
            alert('Login successfully added!');
        } else {
            alert('This login is already in use!');
        }
    }
addLogin(logins, login);

// // Вызовы функции для проверки
// addLogin('Ajax'); // 'Логин успешно добавлен!'
// addLogin('robotGoogles'); // 'Такой логин уже используется!'
// addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'