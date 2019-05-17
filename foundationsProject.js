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

/* 
Good use of const
 */
const names = document.querySelector('#names');
const prizes = document.querySelector('#prizes');
const prize = data.prizes;
const customers = data.customers;
const arrCust = Object.keys(customers);
/* 
This variable never gets used...
 */
const arrPrizes = Object.keys(prize);

/* 
Good use of arrow functions!
 */
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

/* 
Good indentation!
 */
const renderCustomer = () => {
  return `
  <ul>
    ${
      /* 
      Nice work Mapping!  This is tough stuff!
       */
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

// Great use of innerHTML throughout.
names.innerHTML = renderCustomer();


names.addEventListener('click', (ev) => {
  /* 
  Awesome!  Good use of setting and getting attributes!
   */
  const action = ev.target.getAttribute('data-action');
  const targetPrize = ev.target.parentElement.childNodes[0].data;
  const trimTargetPrize = targetPrize.trim();
  const targetName = ev.target.parentElement.parentElement.parentElement.children[0].innerHTML;
  /* 
  If the value of the prize is zero, they shouldn't be able to add any more prizes!  You could just disable the button in that case.  Or you could just not decrement it.
   */
  if (action === 'inc') {
    /* 
    Instead of += 1 you can do ++
     */
    customers[targetName][trimTargetPrize] += 1;
    /* 
    Instead of -= 1 you can do --
     */
    prize[trimTargetPrize] -= 1;
  }
  if (action === 'dec') {
    customers[targetName][trimTargetPrize] -= 1;
    prize[trimTargetPrize] +=1;
  }
names.innerHTML = renderCustomer();
prizes.innerHTML = renderPrize();
} )
names.innerHTML = renderCustomer();
