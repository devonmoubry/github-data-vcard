console.log('foo bar');

let ul = document.querySelector('.info');
let bio = document.querySelector('.bio');
let imageContainer = document.querySelector('.right');
let nameContainer = document.querySelector('.name');

let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/devonmoubry");
githubRequest.addEventListener("load", makeVCard);
githubRequest.send();

function makeVCard () {
  let user = JSON.parse(this.responseText);
  let list = '';
  let image = `<img src="${user.avatar_url}" alt="${user.name}">`;
  console.log(user);

  list = `
    <li class="row"><div class="key">Name:</div><div class="value">${user.name}</div></li>
    <li class="row"><div class="key">GitHub URL:</div><div class="value"><a href="${user.url}">${user.login}</a></div></li>
    <li class="row"><div class="key">Email:</div><div class="value">devon@moubry.com</div></li>
    <li class="row"><div class="key">Company:</div><div class="value">${user.company}</div></li>
    <li class="row"><div class="key">Website:</div><div class="value"><a href="${user.blog}">${user.blog}</a></div></li>
  `;

  ul.innerHTML = list;
  bio.innerHTML = user.bio;
  imageContainer.innerHTML = image;
  nameContainer.innerHTML = user.name;

}
