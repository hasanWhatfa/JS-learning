function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if(!isNaN(num1) && !isNaN(num2)){
        let multiplyResult = multiply(num1, num2);
        let additionResult = add(num1, num2);
        let subtracionResult = subtract(num1, num2);
        let divisionResult = division(num1, num2);
        displayResult([
            {
                operation:'mutiply',
                result:multiplyResult
            },
            {
                operation:'addition',
                result:additionResult
            },
            {
                operation:'subtract',
                result:subtracionResult
                
            },
            {
                operation:'division',
                result:divisionResult
            }
        ]);
    }
    else{
        displayResult('Please enter valid numbersk')
    }
}

function multiply(a,b){
    // Introduce a debugger statement to pause execution
    debugger;

    return a * b;
}

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function division(a,b){
    return a/b;
}
function displayResult(result){
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
    ${result.map((res,idx)=>{
        return`the result for -${res?.operation} is: ${res.result} \n <br>`
    }).join('')}
    `
}