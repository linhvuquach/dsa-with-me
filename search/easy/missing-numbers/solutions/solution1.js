/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr: number[], brr: number[]): number[] {
    const freqArr: Map<number, number> = new Map();
    const freqBrr: Map<number, number> = new Map();
    let missArr : number[] = [];
    
    // Count the frequency of numbers in the first array
    for(const num of arr)
    {
        freqArr.set(num, (freqArr.get(num) || 0) + 1)
    }

    // Count the frequency of numbers in the seccond array
    for(const num of brr)
    {
        freqBrr.set(num, (freqBrr.get(num) || 0) + 1)
    }
    
    for (const [num, count] of freqBrr.entries())
    {
        if(!freqArr.has(num) || freqArr.get(num) < count)
            missArr.push(num);
    }
    
    missArr.sort((a,b) => a - b);
    
    return missArr;
}