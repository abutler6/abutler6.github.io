function arrAvg(arry){
    var total = math.sum(arry);
    var len = arry.length;
    var avg = total / len;
    return avg;
}

function arrMax(arry){
    var max = 0;
    var len = arry.length;
    var counter;
    for(counter = 0; counter < len; counter++){
        if(arry[counter] > max){
            max = arry[counter];
        }
    }
    return max;
}

function isMember(arry, str){
    if(arry.indexOf(str) > -1){
        return true;

    } else{
        return false;
    }
}

function maxWord(sent){
    var long_word = "";
    var words = sent.split(" ");
    words.forEach(function(word){
        if(word.length > long_word.length){
            long_word = word;
        }
    });
    return long_word;
}
