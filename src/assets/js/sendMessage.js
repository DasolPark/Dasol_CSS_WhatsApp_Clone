const jsUlForMsg = document.querySelector('#js-ul-msg');
const jsFormForMsg = document.querySelector('#js-form-msg');
const jsInputMsg = document.querySelector('#js-input-msg');
const jsGetTime = document.querySelector('#js-current-time');

jsFormForMsg.addEventListener('submit', e => {
  e.preventDefault();

  const li = document.createElement('li');
  li.classList.add('main__chat-list-right');

  const divWrapper = document.createElement('div');
  divWrapper.classList.add('chat-list-right__wrapper');

  const divColumn = document.createElement('div');
  divColumn.classList.add('chat-list__column-right');

  const pMsg = document.createElement('p');
  pMsg.textContent = jsInputMsg.value;

  const divTime = document.createElement('div');
  divTime.classList.add('chat-list__column-right');

  const spanTime = document.createElement('span');
  spanTime.textContent = jsGetTime.firstChild.nodeValue;
  // console.log(jsGetTime.firstChild.nodeValue);

  const icon = document.createElement('i');
  icon.classList.add('fas');
  icon.classList.add('fa-check-double');

  li.appendChild(divWrapper);
  divWrapper.appendChild(divColumn);
  divColumn.appendChild(pMsg);
  divWrapper.appendChild(divTime);
  divTime.appendChild(spanTime);
  divTime.appendChild(icon);

  jsUlForMsg.appendChild(li);

  jsInputMsg.value = '';
  jsInputMsg.focus();
});
