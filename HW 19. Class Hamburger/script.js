const HAMBURGER = {
    small: [5, 20],
    big: [10, 40],
    cheese: [1, 20],
    salad: [2, 5],
    fries: [1.5, 10],
    seasoning: [1.5, 0],
    mayo: [2, 5],
};

class Hamburger {
    constructor() {
        this.size = this.setSize();
        this.filling = this.setFilling();
        this.seasoning = this.setSeasoning();
        this.mayo = this.setMayo();
    }

    getInfo() {
        let value = this.getValue();
        alert(`Your hamburger costs ${value[0]}$ and contains ${value[1]} calories!`);
    }

    getValue() {
        let value = [0, 0];
        for(let key in this) {
            if(this[key]) value = this.getArrSum(value, HAMBURGER[this[key]]);
        }       
        return value;
    }

    getArrSum(arrOne, arrTwo) {
        return [arrOne[0] + arrTwo[0], arrOne[1] + arrTwo[1]];
    }

    setSize() {
        do {
            return prompt('Hi! Please enter hamburger size: big or small?', 'big').toLowerCase().replaceAll(' ', '');
        } while (size !== 'big' && size !== 'small');
    }

    setFilling() {
        let filling = confirm('Do you want to add some extra filling?');
        if(filling) {
            do {
                filling = prompt('Please enter filling: cheese, salad or fries?', 'cheese').toLowerCase().replaceAll(' ', '');
            } while (filling !== 'cheese' && filling !== 'salad' && filling !== 'fries');
        };
        return filling;
    }

    setSeasoning() {
        return confirm('Do you want to add seasoning?') ? 'seasoning' : false;
    }
    
    setMayo() {
        return confirm('Do you want to add mayonnaise?') ? 'mayo' : false;
    }
}

let hamburger = new Hamburger();
hamburger.getInfo();