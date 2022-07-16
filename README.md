# Javascript Recursion | Koseksi 

### Recursion In Detail
- The main intention of recursion in javascript to avoid more logic and Recursion is a
  process of calling method itself until get the desired output 
- To achive recursion we need one base condition in side recursion method to stop the 
  process after received output.
- If the the condition is not there it will be in looped mode and the page willbe idle.
  (Meaning The stack memory is full and will get a exception)
- we can also avoid for loops using recursion.

### Steps:
- Create function in javascript file.
- Add the base condition in side method.
- call the method from inside method and outside method.

### Example (1)

```bash

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

```


### Example (2)

```bash

  function fibanacciSeriesByRecursion(num){
    if(num < 2 ){ 
        return num;
    }

    return fibanacciSeriesByRecursion(num-1) + fibanacciSeriesByRecursion(num - 2);
  }

  const value = fibanacciSeriesByRecursion(5);
  console.log('fibanocci value is' + value);

```