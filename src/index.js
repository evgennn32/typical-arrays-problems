
exports.min = function min (array) {
    if( array != undefined  && array.length > 0 ) {
        let min = Math.min(...array);
        if (min && !isNaN(min)) {
            return min;
        }
    }
    return 0;
}

exports.max = function max (array) {
    if( array != undefined  && array.length > 0 ) {
        let max = Math.max(...array);
        if (max && !isNaN(max)) {
            return max;
        }
    }
    return 0;
}

exports.avg = function avg (array) {
    if( array != undefined  && array.length > 0 ){
        let total = array.reduce((a,b)=> a+b);
        if(total){
            return total/array.length;
        }
    }

    return 0;
}
