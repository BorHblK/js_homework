function myBlend(arr){
    //based on https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    //counting array
    for (let i = arr.length - 1; i > 0; i--) {
        // generating new index for the each element 
        const j = Math.floor(Math.random() * (i + 1));
        // swapping element i with element j
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
      }
}

//default 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array before mixing:",arr)
//blended
myBlend(arr)
console.log("Array after mixing:",arr)