const removeFromArray = function(arr1, ...elements) {
    let arr2 = arr1.filter( e => !elements.includes(e));
    return arr2;

};
module.exports = removeFromArray;
