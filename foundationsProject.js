const data = {
  customers: {
    Dwight: {
      Stapler: 0,
      Candy: 0,
      Coke: 0
    },
    Michael: {
      Stapler: 0,
      Candy: 0,
      Coke: 0
    },
    Pam: {
      Stapler: 0,
      Candy: 0,
      Coke: 0
    },
    Intern: {
      Stapler: 0,
      Candy: 0,
      Coke: 0
    }
  },
  prizes: {
    Stapler: 2,
    Candy: 7,
    Coke: 9
  }
};

const names = document.querySelector("#names");
const prizes = document.querySelector("#prizes");
const prize = data.prizes;
const customers = data.customers;
const arrCust = Object.keys(customers);
const arrPrize = Object.keys(prize);

const renderPrize = () => {
  return `
  <ul>
  ${Object.keys(prize)
    .map(
      key => `
      <li>
      ${key}
        <div class='totalPrizeCount'>
          ${data.prizes[key]}
        </div>
      </li>
    `
    )
    .join("")}
  </ul>
  `;
};
prizes.innerHTML = renderPrize();

const renderCustomer = () => {
  return `
  <ul>
    ${arrCust
      .map(
        key => `
        <li class='prizeClass'>${key}</li>
          <div id='${key}'>
            ${Object.keys(prize)
              .map(
                key2 => `
              <li>${key2}
              <button data-action='dec'>-</button>
              <div class='prizeCount'>
                ${customers[key][key2]}
              </div>
              <button data-action='inc'>+</button>
              </li>
            `
              )
              .join("")}
          </div>
      `
      )
      .join("")}
  </ul>
`;
};

names.innerHTML = renderCustomer();

names.addEventListener("click", ev => {
  const action = ev.target.getAttribute("data-action");
  const targetPrize = ev.target.parentElement.childNodes[0].data;
  const trimTargetPrize = String(targetPrize.trim());
  const targetName = ev.target.parentElement.parentElement.id;
  const totalPrizeCount = prize[trimTargetPrize];
  // const curPrizeArr = [];

  // for (let key in data.customers) {
  //   curPrizeArr.push(data.customers[key][trimTargetPrize])
  // }

  // let curPrizeVal = curPrizeArr.reduce(function (acc, curVal) {
  //   return acc + curVal;
  // }, 0);

  if (totalPrizeCount > 0) {
    if (action === "inc") {
      customers[targetName][trimTargetPrize]++;
      prize[trimTargetPrize]--;
    }
  }
  if ((data.customers[targetName][trimTargetPrize] > 0)) {
    if (action === "dec") {
      customers[targetName][trimTargetPrize]--;
      prize[trimTargetPrize]++;
    }
  }
  names.innerHTML = renderCustomer();
  prizes.innerHTML = renderPrize();
});

names.innerHTML = renderCustomer();
