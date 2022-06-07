
export function add(x,y){
    return x + y
}

export function subtract(x,y){
    return x - y;
}

//the above 2 functions are exported through a 'module' object

const utils = {
    isOdd(x){
        return x % 2 !== 0
    },
    isEven(x){
        return x % 2 === 0
    }
}

export default utils;