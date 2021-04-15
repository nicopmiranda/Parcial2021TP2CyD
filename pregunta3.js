// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

//**Si no hay un tercer mayor también hay que devolver undefined**

const greater3 = nums => {
    let uniqueNums = getUniqueValues(nums);
    
    return uniqueNums.length < 3 ? undefined : uniqueNums.sort((num1, num2) => num2 - num1)[2];
}

function getUniqueValues(nums){
    return nums.filter((value, index, arr) => arr.indexOf(value) === index);
}

// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);