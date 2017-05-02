var solve = function (result,sub_result,k,i,j,n){
    if(i===k&&n===0){
        result.push(sub_result.slice());
        return;
    }
    for(var m=j;m<=9;m++){
        sub_result.push(m);
        solve(result,sub_result,k,i+1,m+1,n-m);
        sub_result.pop();
    }
}
var combinationSum3 = function(k, n) {
    var result = [];
    // k元素个数，0是第几层(共k层) 1是从数字1开始搜索 n是和
    solve(result,[],k,0,1,n);
    return result;
};

console.log(combinationSum3(3,7))