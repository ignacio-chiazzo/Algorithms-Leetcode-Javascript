var plusOne = function(digits) {
    result=[]; carry=1; n=digits.length-1;
    for(i=n; i>=0; i--){
        sum=(carry+digits[i])%10;
        carry=Math.floor((carry+digits[i])/10); 
        result[n]=sum;
        n--;
    }
    if(carry!==0) {result.unshift(carry);} 
    return result;
};
