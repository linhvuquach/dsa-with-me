/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m: number, arr: number[]): number[] {
    let order: number[] = [];
  
    for (let i = 0; i < arr.length - 1; i++)
    {
        for (let j = i+1; j < arr.length; j++)
        {
            if ((arr[i] + arr[j]) === m) order.push(i+1, j+1);
        }    
    }
    
    return order;
}