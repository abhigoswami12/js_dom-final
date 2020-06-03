/* <li class="nav-menu-item" data-id="0"> */

// <button class="btn">Starks</button>
// </li>
let activeHouse = "Starks";
const navMenu = document.querySelector(".nav-menu");
const section = document.querySelector("section");
let housesName = got.houses.map(house => house.name);
// console.log(housesName);
function createNav() {
  navMenu.innerHTML = "";
  housesName.forEach(house => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = house;
    li.classList.add("nav-menu-item");
    button.classList.add("btn");
    button.addEventListener("click", event => {
      activeHouse = event.target.innerText;
      createNav();
      createCards();
      //   console.log(event.target.innerText);
      //   console.log(activeHouse);
    });
    button.classList.add(activeHouse === house ? "is-focus" : "reset");
    navMenu.append(li);
    li.append(button);
  });
}
createNav();

function createCards() {
  let activeHousePeople = got.houses.find(house => house.name === activeHouse)
    .people;
  section.innerHTML = activeHousePeople
    .map(single => {
      return `
          <article class="article">
              <div class="grid-article">
                <img src="${single.image}" alt="">
                <h3 class="name">${single.name}</h3>
    
              </div>
              <p class="description">${single.description}</p>
            </article>
        `;
    })
    .join("");
  //   console.log(activeHousePeople);
}
createCards();
