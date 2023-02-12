let totalDepositMoney = document.getElementById("total-deposit-money");
let totalWidthrawMoney = document.getElementById("total-widthraw-money");
let totalMainBalance = document.getElementById("total-main-balance");
let widthdrawInput = document.getElementById("widthdraw-input");
let depositInput = document.getElementById("deposit-input");

//btn refferances

const depositBtn = document.getElementById("depositBtn");
const widthdrawBtn = document.getElementById("widthdrawBtn");

// deposit Handler
depositBtn.addEventListener("click", function () {
  const latestDepositInput = parseInt(depositInput.value);
  depositInput.value = "";
  if (isNaN(latestDepositInput)) {
    alert("please Inter a Number Value");
  } else {
    const previousDeposit = parseInt(totalDepositMoney.innerText);
    const previousBalance = parseInt(totalMainBalance.innerText);
    const totalCurrentDeposit = latestDepositInput + previousDeposit;
    const totalCurrentBalance = previousBalance + latestDepositInput;
    totalDepositMoney.innerText = totalCurrentDeposit;
    totalMainBalance.innerText = totalCurrentBalance;

  }
});
// widthdraw Handler
widthdrawBtn.addEventListener("click", function () {
  const latestWidthdrawInput = parseInt(widthdrawInput.value);
  widthdrawInput.value = "";
  if (isNaN(latestWidthdrawInput)) {
    alert("please Inter a Number Value");
  } else {
    const previousWidthdraw = parseInt(totalWidthrawMoney.innerText);
    const previousBalance = parseInt(totalMainBalance.innerText);
    const totalCurrentWidthdraw = latestWidthdrawInput + previousWidthdraw;
    const totalCurrentBalance = previousBalance - latestWidthdrawInput;
    totalWidthrawMoney.innerText = totalCurrentWidthdraw;
    totalMainBalance.innerText = totalCurrentBalance;
  
  }
});
