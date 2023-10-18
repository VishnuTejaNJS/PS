let arr = [7,2,-1,9,5]
max_num = arr[0]
smax=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]> max_num){
        max_num = arr[i]
    }
}
for(let i=1;i<arr.length;i++){
    if(arr[i]> max_num && arr[i]<smax){
        smax=arr[i]
    }
}

console.log(smax)
