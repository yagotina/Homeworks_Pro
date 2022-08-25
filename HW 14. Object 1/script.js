const numbers = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30, 
    }, 
    foo2: { 
        k: 23, 
        p: 13,
        foo3: { 
            a: 23, 
            b: 13,
            foo4: { 
                c: 23, 
                d: 13,
                e: [1, 2, 3, 4],
            }, 
        }, 
    },
}; 

function convert(obj) {
    let newObj = {};    
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            let innerObj = convert(obj[key]);
            for(let key in innerObj) {
                newObj[key] = innerObj[key];
            }
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

console.log(numbers)
console.log(convert(numbers));
