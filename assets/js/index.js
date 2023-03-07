'use strict'

const data = [
  {
    title: 'euclid',
    href: 'https://yura33.github.io/euclid/',
    src: './assets/img/projects/euclid.png'
  },
  {
    title: 'skillbox',
    href: 'https://yura33.github.io/skillbox/',
    src: './assets/img/projects/skillbox.png'
  },
  {
    title: 'plants',
    href: 'https://rolling-scopes-school.github.io/yura33-JSFEPRESCHOOL2022Q4/plants/',
    src: './assets/img/projects/plants.png'
  },
  {
    title: 'momentum',
    href: 'https://rolling-scopes-school.github.io/yura33-JSFEPRESCHOOL2022Q4/momentum/',
    src: './assets/img/projects/momentum.png'
  },
  {
    title: 'lagoona',
    href: 'https://yura33.github.io/lagoona/',
    src: './assets/img/projects/lagoona.png'
  }
];

const projects = document.querySelector('.projects__list');

projects.addEventListener('click', (e) => {
  const projectsItem = e.target.closest('.projects__item');
  const title = projectsItem ? projectsItem.querySelector('.projects__img-title').innerText : null;
  if(title) {
    const obj = data.find(item => item.title === title.toLowerCase())
    document.location.href = obj.href;
  }
});

const dateTag = document.querySelector('.footer__date');
const date = new Date();
dateTag.innerText = date.getFullYear();
console.log();