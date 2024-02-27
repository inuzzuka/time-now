timeNow();
setInterval(timeNow, 1000);

function timeNow(){
  const time = new Date();
  // const formattedTime = new Date().toLocaleTimeString();
  const formattedTime = time.toLocaleTimeString();
  document.querySelector('.time').textContent = formattedTime;
}

function countdownDate(){
  
}