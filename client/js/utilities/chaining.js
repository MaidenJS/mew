//https://www.youtube.com/watch?v=5rwuKH-zdos

// example of public variables/methods
let obj = function () {
    this.i = 0;

    this.add = function (num) {
        this.i += num;
        return this;
    };

    this.sub = function (num) {
        this.i -= num;
        return this;
    };

    this.print = function () {
        console.log(this.i);
    }
};
let x = new obj();
x.add(3).sub(1).print();

// example 2 of private variables and closures
let obj2 = function () {
    let i = 0;

    let add = function (num) {
        i += num;
        return this;
    };

    let sub = function (num) {
        i -= num;
        return this;
    };

    let print = function () {
        console.log(i);
    }

    return {
        add: add,
        sub: sub,
        print: print
    }
};

let y = obj2();
y.add(3).sub(1).print();

