const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefoxicon.png') {
    myImage.setAttribute('src','images/neko.png');
  } else {
    myImage.setAttribute('src','images/firefoxicon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

  