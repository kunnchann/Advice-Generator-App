const body = document.querySelector("body");
const box = document.querySelector(".box");
const header = document.querySelector("header");
const p = document.querySelector("p");
const diceBox = document.querySelector(".dice-box");

diceBox.classList.add("focus-in");

// const fetchingApi =  () => {
//   const api = fetch("https://api.adviceslip.com/advice")
//     .then((data) => data.json())
//     .then((realData) => {
//       const title = realData.slip.id;
//       const advice = realData.slip.advice;
//       header.innerHTML = `ADVICE # ${title}`;
//       box.style.visibility = "visible";
//       header.classList.add("focus-in");
//       setTimeout(() => {
//         header.classList.remove("focus-in");
//       }, 500);
//       p.innerHTML = advice;
//       p.classList.add("focus-in");
//       setTimeout(() => {
//         p.classList.remove("focus-in");
//       }, 500);
//     })
//     .catch((err) => console.log(err));
// };

const fetchingApi = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const title = data.slip.id;
  const advice = data.slip.advice;
  header.innerHTML = `ADVICE # ${title}`;
  box.style.visibility = "visible";
  header.classList.add("focus-in");
  setTimeout(() => {
    header.classList.remove("focus-in");
  }, 500);
  p.innerHTML = advice;
  p.classList.add("focus-in");
  setTimeout(() => {
    p.classList.remove("focus-in");
  }, 500);
};

diceBox.addEventListener("click", fetchingApi);

fetchingApi().catch((err) => console.log(err));
