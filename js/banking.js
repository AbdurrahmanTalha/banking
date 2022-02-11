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
function updateTotalField(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const totalFieldAmount = parseFloat(totalFieldText)


    totalField.innerText = totalFieldAmount + amount
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposited-total', depositAmount);
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previusBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previusBalanceTotal + depositAmount
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input')
    updateTotalField('withdraw-total', withdrawAmount)
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previusBalanceTotal - withdrawAmount
})