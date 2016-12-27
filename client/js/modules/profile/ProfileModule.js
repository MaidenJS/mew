export function ProfileModule () {

    console.log('PROFILE Module');
}


export function module1 (param1) {

    return 1;
}

function test2() {
    return 2;

}

function privateFunction() {

}

export var var1 = 1;

export {
    test2 as test1,
    privateFunction as thingy
};

export default hey = "HEY";