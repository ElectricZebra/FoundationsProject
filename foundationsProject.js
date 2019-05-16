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
    }
  },
  prizes: {
    Stapler: 1,
    Candy: 3,
    Coke: 5
  }
};

const names = document.querySelector('#names');
const prizes = document.querySelector('#prizes');
const prize = data.prizes;
const customers = data.customers;

const renderPrize = () => {
  return `
  <ul>
  ${
    Object.keys(prize).map(key => `
      <li>
      ${ key} <div>
      ${ data.prizes[key] }
        </div>
      </li>
    `).join('')
    }
  </ul>
  `
}
prizes.innerHTML = renderPrize();

const renderCustomer = () => {
  const arrCust = Object.keys(customers);
  return `
  <ul>
    ${
    arrCust.map(key => `
        <li>${ key}</li>
        <div id='customerPrizes'>
        ${ Object.keys(prize).map(key => `
        <li>
        ${ key }
        </li>
        `).join('') }
        </div>
          `).join('')
    }

  </ul>
`
};

names.innerHTML = renderCustomer();
