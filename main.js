const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'dog.jpg') {
    myImage.setAttribute('src', 'dog2.jpeg');
  } else {
    myImage.setAttribute('src', 'dog.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Cachorros são divertidos, ${myName}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Cachorros são divertidos, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}
