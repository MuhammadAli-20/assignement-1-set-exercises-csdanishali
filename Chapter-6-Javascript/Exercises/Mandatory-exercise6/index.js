const costInput = document.getElementById('costinfo');
const litersInput = document.getElementById('literinfo');
const calculatebtn = document.getElementById('calculatebtn');
const totalcost = document.getElementById('totalcost');


calculatebtn.addEventListener('click', (e)=> {

  const costinfo = parseFloat(costInput.value);
  const liters = parseFloat(litersInput.value);


  if (!isNaN(costinfo) && !isNaN(liters)) {
    const total = costinfo * liters;
    totalcost.textContent = `Total cost: $${total}`;
  }
});

