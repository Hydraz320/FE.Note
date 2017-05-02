# 插入排序

1. 给定一个数组arr及其长度N(optional)，从P=1到P=N-1进行遍历arr[P]，每次执行完保证arr[0]--arr[P]已经排序；

2. 在每次遍历中，利用tmp存储arr[P]，并从j=P开始将arr[p]与arr[j-1]进行比较，如果arr[p]<arr[j-1]/(升序/)，则将a[j-1]转移到a[j]；

3. 当前遍历转移结束后，将arr[P]的tmp放进去。

