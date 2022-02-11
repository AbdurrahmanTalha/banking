// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5)
// const second = doubleIt(7)
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const depositAmount = parseFloat(inputAmountText)
    inputField.value = ''
    return depositAmount;
}
function updateTotalField(totalFieldId, depositAmount) {
    const depositTotal = document.getElementById(totalFieldId);
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText)


    depositTotal.innerText = depositTotalAmount + depositAmount
}
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');

    // const depositTotal = document.getElementById('deposited-total');
    // const depositTotalText = depositTotal.innerText;
    // const depositTotalAmount = parseFloat(depositTotalText)
    // depositTotal.innerText = depositTotalAmount + depositAmount

    updateTotalField('deposited-total', depositAmount);

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previusBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previusBalanceTotal + depositAmount
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input')
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input')
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText)
    updateTotalField('withdraw-total', withdrawAmount)
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previusBalanceTotal - withdrawAmount
    withdrawInput.value = '';
})