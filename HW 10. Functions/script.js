function main (a = 2, b = 3, c) { 
    let total = sum(a, b);

    if(typeof c === 'function') {
        return c(total);
    } else {
        return total;
    }
}

function sum (a, b) {
    return a + b; 
}

function mult (x) {
    return x * 2;
}

console.log(main(4, 2, mult));
console.log(main(4, 2, 3));