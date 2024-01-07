
function sumNintegers(n) {
    
    let result = 0;

    for(let i=1; i<=n; i++) {
        result = result + i;
    }

    return result;
}

console.log(sumNintegers(100))

function sumNintegers2(n) {
    return (n * (n+1)) / 2
}

console.log(sumNintegers2(100))

function sumNintegersRecursive(n) {

    if(n === 1) return 1;

    return n + sumNintegersRecursive(n-1)

}

console.log(sumNintegersRecursive(100))