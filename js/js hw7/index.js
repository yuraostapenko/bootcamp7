/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const createPostCard = function(post) {
    let root = document.querySelector('.root');
let divpost = document.createElement('div');
let image = document.createElement('img');
let postTitle = document.createElement('h2');
let postText = document.createElement('p');
let button = document.createElement('a');

divpost.classList.add('post');
image.classList.add('post__image');
image.setAttribute('src', post.img);
image.setAttribute('alt', 'post image');
postTitle.classList.add('post__title');
postText.classList.add('post__text');
button.classList.add('button');
button.setAttribute('href', post.link);


postTitle.textContent = post.title;
postText.textContent = post.text;
button.textContent = 'Read more';

root.prepend(divpost);
divpost.prepend(image);
image.after(postTitle);
postTitle.after(postText);
postText.after(button);
};

const createCards = function(posts) {

for (let i of posts) {
  createPostCard(i);
    };

  };

  createCards(posts);
