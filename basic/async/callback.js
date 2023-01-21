'use strict';


// 동기, 비동기 비교
// 콜백 함수는 다시 불러오는 것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// 동기 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));


// 비동기 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// callback hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);


