const toggle = document.querySelector(".toggle");
const body = document.querySelector(".body-background");
const overview = document.querySelector(".overview");
const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
const wrapperSecond = document.querySelector(".title + .wrapper");
const wrapperThird = document.querySelector(".wrapper + .wrapper");
let switchcheck = false;

const dark = {
  background: "hsl(230, 17%, 14%)",
  topbackground: "hsl(232, 19%, 15%)",
  cardbg: "hsl(228, 28%, 20%)",
  bluetext: "hsl(228, 34%, 66%)",
  secondtext: "hsl(0, 0%, 100%)",
  toggle: "linear-gradient(to right, #378fe6, #3eda82)",
  brightness: "brightness(130%)",
};

const light = {
  background: "hsl(0, 0%, 100%)",
  topbackground: "hsl(225, 100%, 98%)",
  cardbg: "hsl(227, 47%, 96%)",
  graytext: "hsl(228, 12%, 44%)",
  darktext: "hsl(230, 17%, 14%)",
  toggle: "hsl(230, 22%, 74%)",
  brightness: "brightness(95%)",
};

const cards = [
  {
    social: "facebook",
    username: "@nathanf",
    number: "1987",
    area: "FOLLOWERS",
    level: "upgrade",
    icon: "up",
    today: "12 Today",
  },
  {
    social: "twitter",
    username: "@nathanf",
    number: "1044",
    area: "FOLLOWERS",
    level: "upgrade",
    icon: "up",
    today: "99 Today",
  },
  {
    social: "instagram",
    username: "@realnathanf",
    number: "11k",
    area: "FOLLOWERS",
    level: "upgrade",
    icon: "up",
    today: "1099 Today",
  },
  {
    social: "youtube",
    username: "Nathan F.",
    number: "8239",
    area: "SUBSCRIBERS",
    level: "downgrade",
    icon: "down",
    today: "144 Today",
  },
];

const statics = [
  {
    area: "Page Views",
    social: "facebook",
    number: "87",
    level: "upgrade",
    icon: "up",
    percent: "3%",
  },
  {
    area: "Likes",
    social: "facebook",
    number: "52",
    level: "downgrade",
    icon: "down",
    percent: "2%",
  },
  {
    area: "Likes",
    social: "instagram",
    number: "5462",
    level: "upgrade",
    icon: "up",
    percent: "2257%",
  },
  {
    area: "Profile Views",
    social: "instagram",
    number: "52k",
    level: "upgrade",
    icon: "up",
    percent: "1375%",
  },
  {
    area: "Retweets",
    social: "twitter",
    number: "117",
    level: "upgrade",
    icon: "up",
    percent: "303%",
  },
  {
    area: "Likes",
    social: "twitter",
    number: "507",
    level: "upgrade",
    icon: "up",
    percent: "553%",
  },
  {
    area: "Likes",
    social: "youtube",
    number: "107",
    level: "downgrade",
    icon: "down",
    percent: "19%",
  },
  {
    area: "Total Views",
    social: "youtube",
    number: "1407",
    level: "downgrade",
    icon: "down",
    percent: "12%",
  },
];

function addCards() {
  let displayCards = cards.map((card) => {
    let initial =
      card.social === "instagram"
        ? `<div class = 'card'> <div class = ${card.social}></div>`
        : `<div class = 'card ${card.social}'>`;
    return `${initial}
      <div class = 'user'>
      <div class ${card.social}></div>
      <img src = './images/icon-${card.social}.svg' alt = '${card.social}'>
      <small>${card.username}</small>
      </div>
      <h2>${card.number}</h2>
      <p>${card.area}</p>
      <div class = 'level ${card.level}'>
      <img src = './images/icon-${card.icon}.svg' alt = '${card.level}'/>
      <p>${card.today}</p>
      </div>
      </div>`;
  });
  displayCards = displayCards.join("");
  wrapper.innerHTML = displayCards;
}

function addStatics() {
  let secondWrapper = statics.slice(0, 4).map((static) => {
    return `<div class="card statistic">
      <div class="first">
        <p>${static.area}</p>
        <img src="./images/icon-${static.social}.svg" alt="${static.social}" />
      </div>
      <div class="second">
        <h2>${static.number}</h2>
        <div class="level ${static.level}">
          <img src="./images/icon-${static.icon}.svg" alt="${static.level}" />
          <p>${static.percent}</p>
        </div>
      </div>
    </div>
      `;
  });
  secondWrapper = secondWrapper.join("");
  wrapperSecond.innerHTML = secondWrapper;

  let thirdWrapper = statics.slice(4).map((static) => {
    return `<div class="card statistic">
      <div class="first">
        <p>${static.area}</p>
        <img src="./images/icon-${static.social}.svg" alt="${static.social}" />
      </div>
      <div class="second">
        <h2>${static.number}</h2>
        <div class="level ${static.level}">
          <img src="./images/icon-${static.icon}.svg" alt="${static.level}" />
          <p>${static.percent}</p>
        </div>
      </div>
    </div>
      `;
  });
  thirdWrapper = thirdWrapper.join("");
  wrapperThird.innerHTML = thirdWrapper;
}

function makeDark() {
  document.documentElement.style.setProperty("--background", `${dark.background}`);
  document.documentElement.style.setProperty("--backgroundtop", `${dark.topbackground}`);
  document.documentElement.style.setProperty("--cardbg", `${dark.cardbg}`);
  document.documentElement.style.setProperty("--firsttext", `${dark.bluetext}`);
  document.documentElement.style.setProperty("--secondtext", `${dark.secondtext}`);
  document.documentElement.style.setProperty("--brightness", `${dark.brightness}`);
  toggle.style.background = `${dark.toggle}`;
  button.style.left = "3px";
}
function makeLight() {
  document.documentElement.style.setProperty("--background", `${light.background}`);
  document.documentElement.style.setProperty("--backgroundtop", `${light.topbackground}`);
  document.documentElement.style.setProperty("--cardbg", `${light.cardbg}`);
  document.documentElement.style.setProperty("--firsttext", `${light.graytext}`);
  document.documentElement.style.setProperty("--secondtext", `${light.darktext}`);
  document.documentElement.style.setProperty("--brightness", `${light.brightness}`);
  toggle.style.background = `${light.toggle}`;
  button.style.left = "calc(100% - 21px)";
  overview.style.color = `${light.graytext}`;
}

window.addEventListener("DOMContentLoaded", function () {
  addCards();
  addStatics();
});

toggle.addEventListener("click", function () {
  if (!switchcheck) {
    makeLight();
    switchcheck = true;
  } else {
    makeDark();
    switchcheck = false;
  }
});
