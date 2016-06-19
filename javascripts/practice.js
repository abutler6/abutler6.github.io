var hasOneEven = function(arr){
    "use strict";
    //search for even number in arr
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0)
            //hit
            return true;
    }
    //miss
    return false;
};

var a = [3, 5, 7, 2];

var sum = 0;
a.forEach(function(val){
    sum = sum + val;
});


var a = ["a", "b", "a", "c"];

var isMember = function(arr, s){
    var timesSoFar = 0;
    arr.forEach(function(value){
        if(value === s){
            timesSoFar = timesSoFar + 1;
        }

    });
    return timesSoFar >= 2;

};
