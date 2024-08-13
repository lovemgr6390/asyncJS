// What is synchronous programming

// console.log("pre-heat the oven to 180deg celius");
// console.log("Chop half the chocolate into chunks and melt in microwave");
// console.log("Mix butter and sugar");
// console.log("beat in the eggs and vanila for 1-2 min");
// console.log("Whisk in the melted chocolate");
// console.log(
//   "Fold in the other half of chocolate chunks and then transfer the batter to baking dish"
// );
// console.log("bake for 20-25 min then let cool completely");
// console.log("Slice serve and enjoy");

// What is asynchronous programming

// function task1(callback) {
//   setTimeout(() => {
//     console.log("1. pre-heat the oven to 180deg celius");
//     callback();
//   }, 1000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("2. Chop half the chocolate into chunks and melt in microwave");
//     callback();
//   }, 1200);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("3. Mix butter and sugar");
//     callback();
//   }, 4000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("4. beat in the eggs and vanila for 1-2 min");
//     callback();
//   }, 500);
// }

// function task5(callback) {
//   setTimeout(() => {
//     console.log("5. Whisk in the melted chocolate");
//     callback();
//   }, 800);
// }

// function task6(callback) {
//   setTimeout(() => {
//     console.log(
//       "6. Fold in the other half of chocolate chunks and then transfer the batter to baking dish"
//     );
//     callback();
//   }, 1000);
// }

// function task7(callback) {
//   setTimeout(() => {
//     console.log("7. bake for 20-25 min then let cool completely");
//     callback();
//   }, 900);
// }

// function task8(callback) {
//   setTimeout(() => {
//     console.log("8. Slice serve and enjoy");
//     callback();
//   }, 300);
// }

// task8(() => {
//   task7(() => {
//     task6(() => {
//       task5(() => {
//         task4(() => {
//           task3(() => {
//             task2(() => {
//               task1(() => {});
//             });
//           });
//         });
//       });
//     });
//   });
// });

// This is result in callback hell so in order to metigate this issues we are having promise or async await

// Simple async function

// const showMessage = (callback) => {
//   console.log(callback);
// };

// const firstMess = (callback) => {
//   setTimeout(() => {
//     showMessage("Hello");
//     callback();
//   }, 2000);
// };

// const secondMess = (callback) => {
//   showMessage("World");
// };

// firstMess(secondMess);

// Promise in JS

// const promise = new Promise((resolve, reject) => {
//   const randomCount = Math.floor(Math.random() * 10);

//   setTimeout(() => {
//     if (randomCount > 4) {
//       resolve(`Its a success ${randomCount}`);
//     } else {
//       reject(`Sorry something went wrong", ${randomCount}`);
//     }
//   }, 500);
// });

// promise.then((val) => console.log(val)).catch((err) => console.log(err));

// Chaining the promise, in order to chain we must return the promsise

// const promise1 = new Promise((resolve, reject) => {
//   resolve("You lucky man for promise 1");
// });

// const promise2 = new Promise((resolve, reject) => {
//   resolve("You are lucky and loved by god promise 2");
// });

// const promise3 = new Promise((resolve, reject) => {
//   resolve("God still love you promise 3");
// });

// Promise hell

// promise1
//   .then((data) => {
//     console.log(data);
//     promise2.then((data) => {
//       console.log(data);
//       promise3
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((err) => console.log(err));
//     });
//   })
//   .catch((err) => console.log(err));

// Correct or best method

// promise1
//   .then((res) => {
//     console.log(res);
//     return promise2;
//   })
//   .then((res) => {
//     console.log(res);
//     return promise3;
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Checking promise all. All promisese need to be resolved then only it will work

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("The first promise is resolved buddy");
//   }, 2000);
// });

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("The second promise is rejected buddy");
//   }, 1500);
// });

// Promise.all([promiseOne, promiseTwo])
//   .then((data) => console.log(`${data[0]}, \n${data[1]}`))
//   .catch((err) => console.log(err));

//promise async/await

// const preHeatOven = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const preHeatOven = true;
//       if (preHeatOven) {
//         resolve("Preheat oven to 180 deg celcius");
//       } else {
//         reject("Failed task");
//       }
//     }, 2000);
//   });
// };

// const addSugarAndChocochips = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const addSugarAndChocoChips = true;
//       if (addSugarAndChocoChips) {
//         resolve(
//           "Place butter and chocolate chips, stir untill melted and smooth"
//         );
//       } else {
//         reject("Failed task");
//       }
//     }, 1500);
//   });
// };

// const addFlourCocoSalt = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const addSaltFlourCoco = true;
//       if (addSaltFlourCoco) {
//         resolve("Add salt flour coco and stir untill smooth");
//       } else {
//         reject("Failed task");
//       }
//     }, 2000);
//   });
// };

// const bakingMixture = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bakeMixture = false;
//       if (bakeMixture) {
//         resolve("Bake for 24 min for really gooey center");
//       } else {
//         reject("Failed task");
//       }
//     }, 2000);
//   });
// };

// const bakeBrowinee = async () => {
//   try {
//     const taskOne = await preHeatOven();
//     console.log(taskOne);
//     const taskTwo = await addSugarAndChocochips();
//     console.log(taskTwo);
//     const taskThree = await addFlourCocoSalt();
//     console.log(taskThree);

//     const taskFour = await bakingMixture();
//     console.log(taskFour);

//     console.log("Enjoy your browinees");
//   } catch (err) {
//     console.log("Big fat error", err);
//   }
// };

// bakeBrowinee();

// const finalOneItem = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const timeNow = Math.floor(Math.random() * 10);

//     if (timeNow > 4) {
//       resolve("Great we got it");
//     } else {
//       reject("God help us please");
//     }
//   }, 9000);
// });

// const finalCall = async () => {
//   const myval = await finalOneItem;

//   console.log(myval);
// };

// finalCall();

// const itemOne = Promise.resolve("God is always with you man");

// itemOne.then((res) => console.log(res)).catch((err) => console.log(err));

const butEL = document.querySelector("button");
const jokeEl = document.querySelector("#joke");
const punchEl = document.querySelector("#punch");

butEL.addEventListener("click", () => {
  const getData = async () => {
    try {
      const res = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();

      if (res.ok) {
        console.log(data);
        jokeEl.textContent = data.joke;
      }
    } catch (err) {
      console.log(err);
    }
  };
  getData();
});
// This is with the .then and .catch
window.addEventListener("DOMContentLoaded", () => {
  // This is the post method
  // fetch("https://dummyjson.com/products/add", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     title: "BMW Pencil",
  //     /* other product data */
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // Simple get
  fetch("https://dummyjson.com/products/1", {})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((data) => console.log(data));
  // Simple PUT
  // fetch("https://dummyjson.com/products/1", {
  //   method: "PUT",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     title: "Testing item",
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((data) => console.log(data));
  // Simple Delete
  // fetch("https://dummyjson.com/products/1", {
  //   method: "DELETE",
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
});
