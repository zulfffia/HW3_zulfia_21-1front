// №1
// var oneNum = prompt('введите первое число')
// var twoNum = prompt('введите второе число')
//
// function minNam (oneNum, twoNum){
//     if (isNaN(oneNum) || isNaN(twoNum)){
//         alert('введите число!')
//             return;
//     }
//     console.log(Math.min(oneNum, twoNum))
// }
// minNam(oneNum, twoNum)

// №2
// const senLength = prompt("напишите что-нибудь)");
// function returnFunction(senLength) {
//     alert(`длина строки: ${senLength.length}`)
// }
// returnFunction(senLength)

// №3
function calc() {
    var result;
    var oneNum = Number(prompt("введите первое число"));
    var  sign  = prompt("выберите действие\n+\n-\n*\n/")
    var twoNum = Number(prompt("введите второе число"))

    if (isNaN(oneNum) || isNaN(twoNum)) {
      alert("Введите только числа!")
    }
    switch (sign) {
      case '+':
        result = oneNum + twoNum;
        break;
      case '-':
        result = oneNum - twoNum;
        break;
      case '*':
        result = oneNum * twoNum;
        break;
      case '/':
        twoNum === 0 ? result="Ошибка!" : result = oneNum / twoNum;
        break;
      default:
        alert("выберите правильные действия")
    }
    alert(result)
  }
calc()