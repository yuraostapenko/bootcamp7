/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

let root = document.querySelector('.root');

let getAllUsers = () => {
  fetch('https://test-users-api.herokuapp.com/users/')
    .then(response => response.ok ? response.json() : null)
    .then(data =>
      // console.log(data)
      createList(data.data)
    )
    .catch(err => console.log(err))
};

getAllUsers();
let createList = (arr) => {
  arr.map(el => {
    let ul = document.createElement('ul');
    let lili = document.createElement('li');

    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    li1.textContent = el.id;
    li2.textContent = el.name;
    li3.textContent = el.age;

    root.append(ul);
    ul.append(lili);
    lili.append(li1);
    lili.append(li2);
    lili.append(li3);
  })
};


let getUserById = () => {
  event.preventDefault();
  let id = document.querySelector('.userById').value;


  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(response => response.ok ? response.json() : null)
    .then(data => {
      // console.log(data);
      byIdCreate(data.data);
    })
    .catch(err => console.log(err))
}

document.querySelector('.button').addEventListener('click', getUserById);


let byIdCreate = (arr) => {

  let input = document.querySelector('.get_userById');
  let ul = document.createElement('ul');
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  
  li1.textContent = arr.id;
  li2.textContent = arr.name;
  li3.textContent = arr.age;

  input.after(ul);

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);
};


let deleteUser = () => {
  event.preventDefault();
  let id = document.querySelector('.userById').value;
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.ok ? response.json() : null)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
document.querySelector('.btnUserDelete').addEventListener('click', deleteUser);


let postUser = (name, age) => {
  event.preventDefault();
  let inputName = document.querySelector('.userName').value;
  let inputAge = document.querySelector('.userAge').value;
  fetch('https://test-users-api.herokuapp.com/users/', {
      method: 'POST',
      body: JSON.stringify({
        name: inputName,
        age: inputAge,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.ok ? response.json() : null)
    .then(date => console.log(date))
    .catch(err => console.log(err))
};
document.querySelector('.addUser').addEventListener('click', postUser);



let updateUser = (id, user) => {
  event.preventDefault();
  let iD = document.querySelector('.userId').value;
  let inputName = document.querySelector('.userNameUp').value;
  let inputAge = document.querySelector('.userAgeUp').value;

  fetch(`https://test-users-api.herokuapp.com/users/${iD}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: inputName,
      age: inputAge,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })

  .then(response => response.ok ? response.json() : null)
    .then(date => console.log(date))
    .catch(err => console.log(err))
};
document.querySelector('.updateUser').addEventListener('click', updateUser);