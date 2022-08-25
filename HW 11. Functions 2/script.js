function comparison(a, b) {
    function total(list) {
        let sum = 0;
        for(let i = 0; i < list.length; i++) {
            if(typeof list[i] === 'number') sum += list[i];
        }
        return sum;
    }
    return total(a) > total(b) ? a : b;
}

let arr1 = [1,2,3, 'hello',4,5]; //15
let arr2 = [1,2,3, true, 4, undefined, 6]; //16

console.log(comparison(arr1, arr2)); 