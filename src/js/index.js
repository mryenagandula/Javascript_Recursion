/** Example 01 starting */
function consoleLogBasedOnCondition(index, times){

    /** Adding base condition and also stop the condition using return. */
    if(index === times){
        console.log("we got output.");
        return;
    }
    console.log('index value is ',index);

    /** Calling same method until condition satisfied. */
    consoleLogBasedOnCondition(index+1,times)
}

consoleLogBasedOnCondition(1, 5);
/** Example 01 Ending */


/** Example 02 starting */

function fibanacciSeriesByRecursion(num){
    if(num < 2 ){ 
        return num;
    }

    return fibanacciSeriesByRecursion(num-1) + fibanacciSeriesByRecursion(num - 2);
}

const value = fibanacciSeriesByRecursion(5);
console.log('fibanocci value is' + value);

/** Example 02 Ending */

