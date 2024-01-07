function quickSort(
    compare,
    elements = [],
    lowerIndex = 0,
    upperIndex = elements.length - 1
  ) {
    if (lowerIndex < upperIndex) {
      const index = partition(compare, elements, lowerIndex, upperIndex);
      console.log(`Index was received: ${index}. Now running quickSort on two sides of index`)
      quickSort(compare, elements, lowerIndex, index - 1);
      quickSort(compare, elements, index + 1, upperIndex);
    }
    return elements;
  }
  
  function partitionOld(compare, elements, lowerIndex, upperIndex) {
    const pivotValue = elements[upperIndex];
    let partitionIndex = lowerIndex;
  
    for (let index = lowerIndex; index < upperIndex; index++) {
      const comparison = compare(pivotValue, elements[index]);
  
      if (comparison > 0) {
        if (partitionIndex !== index) {
          [elements[index], elements[partitionIndex]] = [
            elements[partitionIndex],
            elements[index],
          ];
        }
        partitionIndex++;
      }
    }
  
    [elements[partitionIndex], elements[upperIndex]] = [
      elements[upperIndex],
      elements[partitionIndex],
    ];
    return partitionIndex;
  }

  function partition(compare, elements, lowerIndex, upperIndex) {
    let pivot = elements[upperIndex];
    let partitionIndex = lowerIndex;
    
    for(let i=lowerIndex; i< upperIndex; i++) {
      const comparison = compare(pivot, elements[i])
      if(comparison >= 0) {
        [elements[i], elements[partitionIndex]] = [elements[partitionIndex], elements[i]]
        console.log(`Here! ${JSON.stringify(elements)}`)
        partitionIndex++;
      }
    }

    [elements[upperIndex], elements[partitionIndex]] = [elements[partitionIndex], elements[upperIndex]]
    
    return partitionIndex;
  }


  module.exports = quickSort;