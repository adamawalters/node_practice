function mergeSort(compare, elements) {
    if(!Array.isArray(elements) || elements.length < 1) return elements;
    if(elements.length === 1) return elements;
    
    const mid = Math.floor(elements.length/2)
    
    const leftHalf = mergeSort(compare, elements.slice(0, mid))
    const rightHalf = mergeSort(compare, elements.slice(mid, elements.length))
      
    return merge(leftHalf, rightHalf, compare)
    
  }
  
  function merge(leftHalf, rightHalf, compare) {
    
    let leftIndex = 0;
    let rightIndex = 0;

    console.log(`leftHalf is ${leftHalf}`)
    console.log(`Right half is ${rightHalf}`)
    
    let sorted = [];
    
    while(leftIndex < leftHalf.length && rightIndex < rightHalf.length) {

     const comparison = compare(leftHalf[leftIndex], rightHalf[rightIndex])
      if(comparison < 0) {
        sorted.push(leftHalf[leftIndex]);
        leftIndex++;
      } else {
        sorted.push(rightHalf[rightIndex]);
        rightIndex++;
      }
    }
    
    if(leftIndex < leftHalf.length) {
        sorted = sorted.concat(leftHalf.slice(leftIndex))
    } else {
        sorted = sorted.concat(rightHalf.slice(rightIndex))
    }

    return sorted;
    
  }
  
  console.log(mergeSort((left, right)=> left-right, [3, 2, 1, 4, 5]))



