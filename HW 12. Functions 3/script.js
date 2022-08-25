const arr = [1, 2, "str", true, function f1() {}, 10];

function copy(list, func) {
    let newList = list.slice();
    if(typeof func === 'function') {
        for(let i = 0; i < newList.length; i++) {
            if(typeof newList[i] === 'number') newList[i] = func(newList[i]);
        }
    }
    return newList;
}

function mult(value) {
    return value * 10;
}

console.log(copy(arr, mult));