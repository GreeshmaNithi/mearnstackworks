var arr = [10, 11, 12, 15, 16, 17];
var element = 17;
var lower = 0, upper = arr.length - 1;
var count = 1;
var flag = 0;
while (lower <= upper) {
    mid = Math.floor((lower + upper) / 2);    //find the middle element
    if (element > arr[mid]) {                 //condition number 1: element in right side of the mid
        lower = mid + 1;                      //then lower is set to mid+1

    }
    else if (element < arr[mid]) {          //condition 2: element is in left side of the mid
        upper = mid - 1;                    //then srt the upper value to mid-1
    }

    else if (element == arr[mid]) {         //condition 3: mid and searchng element is equal
        flag = 1;                           //flag is set to 1
        break;                              //break the loop
    }
}                                           //while is closed
console.log(flag == 0 ? "nf" : "found")     //then flag==0 aanenkil notfound otherwise found
console.log(count);                         //print the count
