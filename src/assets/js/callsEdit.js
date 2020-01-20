const jsEdit = document.querySelector('#js-editDiv');
const jsClear = document.querySelector('#js-newToClearIcon');
const jsListCol = document.querySelector('#js-listDiv');
// const jsList = document.querySelector('.main__calls-list');
const jsInfo = document.querySelector('#js-infoIcon');

const onEditClick = () => {
  jsEdit.textContent = 'Done';

  jsClear.removeChild(jsClear.children[0]);
  jsClear.textContent = 'Clear';
  jsClear.style = 'cursor:pointer;';
  jsClear.href = '#';

  const i = document.createElement('i');
  i.classList.add('fas');
  i.classList.add('fa-minus-circle');
  i.style = 'cursor:pointer';
  i.id = 'js-minusIcon';
  // jsList.childNodes[1].insertBefore(i, jsList.childNodes[1].firstChild);
  // jsListCol.appendChild(i);
  jsListCol.insertBefore(i, jsListCol.firstChild);
  jsInfo.classList.add('calls-info-showing');

  const jsMinus = document.querySelector('#js-minusIcon');
  if (jsMinus) {
    jsMinus.addEventListener('click', () => {
      jsMinus.parentNode.parentNode.parentNode.removeChild(
        jsMinus.parentNode.parentNode.parentNode.children[0]
      );
    });
  }

  jsEdit.removeEventListener('click', onEditClick); // Edit Event Remove
  jsEdit.addEventListener('click', onDoneClick); // Done Event Add
};

const onDoneClick = () => {
  jsEdit.removeEventListener('click', onDoneClick); // Done Event remove
  jsEdit.addEventListener('click', onEditClick); // Edit Event Add

  jsEdit.textContent = 'Edit';
  jsClear.textContent = '';
  jsClear.href = 'calls_newCall.html';

  const i = document.createElement('i');
  i.classList.add('fas');
  i.classList.add('fa-phone-volume');
  jsClear.appendChild(i);

  const jsMinus = document.querySelector('#js-minusIcon');
  if (jsMinus) {
    jsMinus.parentNode.removeChild(jsMinus);
  }

  jsInfo.classList.remove('calls-info-showing');
};

jsEdit.addEventListener('click', onEditClick);
