function calculate() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operator = document.getElementById('operator').value;
    const history = document.getElementById('history');
    
    let val1 = parseFloat(num1.value);
    let val2 = parseFloat(num2.value);
    let result;

    if (isNaN(val1) && isNaN(val2)){
        num1.classList.add('error');
        num2.classList.add('error');
        alert("Инвалид на 2 числах!!");
        return;
    }
    else if (isNaN(val1)) {
        num2.classList.remove('error');
        num1.classList.add('error');
        alert("Инвалид на первом числе!!");
        return; 
    }
    else if (isNaN(val2)) {
        num1.classList.remove('error');
        num2.classList.add('error');
        alert("Инвалид на втором числе!!");
        return; 
    } else {
        num1.classList.remove('error');
        num2.classList.remove('error');
    }
    

    switch(operator) {
        case '+':
            result = val1 + val2; 
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/': 
            if (val2 === 0) {
                alert("Can not divide 0");
                return;
            }
            result = val1 / val2;
            break;
        default:
            result = "Something was wrong";
    }
    document.querySelectorAll('.history p').forEach(
        p => {
            p.classList.remove('latest');
            p.classList.add("old");
        });

    let newHistory = document.createElement('p');
    newHistory.classList.add('latest');
    newHistory.innerHTML = `${val1} ${operator} ${val2} = ${result}`;
    history.appendChild(newHistory); 
}