const jsCurrentTime = document.querySelector('#js-current-time');

const currentTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  jsCurrentTime.textContent = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
};

if (jsCurrentTime) {
  currentTime();
  setTimeout(currentTime, 1000);
}
