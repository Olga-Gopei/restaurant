const orderTableBtn = document.getElementById('order-table');
const orderTableModal = document.querySelector('#order-table-modal');
const orderTableCloseBtn = document.getElementById('order-table-close');

const handleOpenOrderTableModal = () => {
  orderTableModal.style.display = 'flex';
};

orderTableBtn.addEventListener('click', handleOpenOrderTableModal)

const handleCloseOrderTableModal = () => {
  orderTableModal.style.display = 'none';
};

const thanksMsgModal = document.querySelector('#thanks-msg-modal');

const handleOpenThanksMsgModal = () => {
  thanksMsgModal.style.display = 'flex';
};

const handleCloseThanksMsgModal = () => {
  thanksMsgModal.style.display = 'none';
};

thanksMsgModal.addEventListener('click', (event) => {
  if (event.target.id === 'thanks-msg-modal') {
    handleCloseThanksMsgModal()
  }
});

const handleSubmit = (event) => {
  event.preventDefault();

  const userName = document.querySelector('#userName').value;
  const thePhone = document.querySelector('#thePhone').value;
  const theDate = document.querySelector('#theDate').value;
  const theNumb = document.querySelector('#theNumb').value;

  handleOpenThanksMsgModal()
  handleCloseOrderTableModal()

  return {
    name: userName,
    phone: thePhone,
    number: theNumb,
    date: theDate

  }
};

const innerModal = document.querySelector('.inner-modal');
innerModal.innerHTML = `
    <form action="#" onsubmit={handleSubmit(event)}>
      <h1 class='text'>Пожалуйста, заполните форму и мы свяжемся с Вами для подтверждения бронирования</h1>

      <p>Ваше имя</p>
      <input id='userName' type="text" name = 'name'/>

      <p>Номер телефон</p>
      <input id='thePhone' type="text" name='phone'/>

      <p>Количество человек</p>
      <input id='theNumb' type="number" name='number'/>

      <p>Дата брони</p>
      <input type="date" id="theDate" name='date'>

      <button type="submit" id="show-modal" class="btn">Забронировать</button>

      <button type="button" id="order-table-close" onclick={handleCloseOrderTableModal()}>Отмена</button>
    </form>
  `


const wrapShoppingCardBtn = document.querySelector('.wrap-shopping-card');
const basketMenu = document.getElementById('basket-menu');

const handleOpenBasketMenu = () => {
  basketMenu.style.display = 'flex';
};

wrapShoppingCardBtn.addEventListener('click', handleOpenBasketMenu)
