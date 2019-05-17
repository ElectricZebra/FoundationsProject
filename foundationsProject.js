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
    Candy: 7,
    Coke: 7
  }
};

const names = document.querySelector('#names');
const prizes = document.querySelector('#prizes');
const prize = data.prizes;
const customers = data.customers;
const arrCust = Object.keys(customers);
const arrPrizes = Object.keys(prize);

const renderPrize = () => {
  return `
  <ul>
  ${
    Object.keys(prize).map(key => `
      <li>
      ${ key}
        <div class='totalPrizeCount'>
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
        <li class='prizeClass'>${key}</li>
          <div class='customerPrizes'>
            ${ Object.keys(prize).map(key2 => `
              <li>${ key2 }
              <button data-action='dec'>-</button>
              <div class='prizeCount'>
                ${ customers[key][key2] }
              </div>
              <button data-action='inc'>+</button>
              </li>
            `).join('')}
          </div>
      `).join('')
    }
  </ul>
`
};

names.innerHTML = renderCustomer();


names.addEventListener('click', (ev) => {
  const action = ev.target.getAttribute('data-action');
  const targetPrize = ev.target.parentElement.childNodes[0].data;
  const newTargetPrize = targetPrize.trim();
  const targetName = ev.target.parentElement.parentElement.parentElement.children[0].innerHTML;
  if (action === 'inc') {
    customers[targetName][newTargetPrize] += 1;
    prize[newTargetPrize] += 1;
  }
  if (action === 'dec') {
    customers[targetName][newTargetPrize] -= 1;
    prize[newTargetPrize] -=1;
  }
names.innerHTML = renderCustomer();
prizes.innerHTML = renderPrize();
} )
names.innerHTML = renderCustomer();
