class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
            let res = [];
    
    for(let i= 0; i< temperatures.length; i++){
        let counter = 0;
        for(let j =i+1; j <temperatures.length; j++){
            if(temperatures[i] < temperatures[j]){
                counter++;
                break;
            }
            else{
               if(j == temperatures.length-1){counter = 0}
                        else {
                counter++;
                        }

            }
        }

        res.push(counter);

    }
    return res;
    }
}
