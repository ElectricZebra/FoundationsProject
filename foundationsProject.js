const data = {
  customers: {
    Dwight: {
      Stapler: 6,
      Candy: 5,
      Coke: 4
    },
    Michael: {
      Stapler: 4,
      Candy: 3,
      Coke: 2
    },
    Pam: {
      Stapler: 3,
      Candy: 2,
      Coke: 1
    }
  },
  prizes: {
    Stapler: 1,
    Candy: 5,
    Coke: 7
  }
};

const names = document.querySelector('#names');
const prizes = document.querySelector('#prizes');
const prize = data.prizes;
const customers = data.customers;
const arrCust = Object.keys(customers);
const arrPrizes = Object.keys(prize);

function custPrizeCount (name, prize) {
  const countArr = [];
  for (let key in data.customers[name]) {
    countArr.push(data.customers[name][key]);
  }
  return countArr;
}
console.log(custPrizeCount("Michael"));

const renderPrize = () => {
  return `
  <ul>
  ${
    Object.keys(prize).map(key => `
      <li>
      ${ key}
        <div id='totalPrizeCount'>
          ${ data.prizes[key]}
        </div>
      </li>
    `).join('')
    }
  </ul>
  `
}
prizes.innerHTML = renderPrize();

const renderCustomer = () => {
  return `
  <ul>
    ${
      arrCust.map(key => `
        <li>${ key }</li>
          <div id='customerPrizes'>
            ${ Object.keys(prize).map(key2 => `
              <li>${ key2 }
              <button>-</button>
              <div id='prizeCount'>
                ${ customers[key][key2] }
              </div>
              <button>+</button>
              </li>
            `).join('')}
          </div>
      `).join('')
    }
  </ul>
`
};

names.innerHTML = renderCustomer();

