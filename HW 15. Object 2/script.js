const num1 = { 
    x: 10, 
    y: 20,
};
const num2 = { 
    z: 30, 
};
const num3 = { 
    x: 10, 
};
const num4 = { 
    x: 20, 
    y: 30,
};

function assignObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);;
};

console.log(assignObjects(num1, num2)); // вывод { x:10, y:20, z: 30 }
console.log(assignObjects(num3, num4)); // вывод { x:20, y: 30 }


