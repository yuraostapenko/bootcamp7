const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


let login = prompt('enter your login, must complete from 4 to 16 symbols');

const isLoginValid = function (login) {
   return (login.length >= 4 && login.length <= 16)}; 



const isLoginUnique = function (allLogins, login) {
       
    return allLogins.includes(login);
};

const addLogin = function (logins, login) {
    if (isLoginValid(login)) {
alert('Error! Login must be from 4 to 16 symbols');
    } else if (isLoginUnique(logins, login)) {
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