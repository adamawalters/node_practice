function stringSplitter(phrase, splitter) {

    if(!phrase.includes(splitter)) {
        return [phrase]
    }
    console.log(`Phrase passed in is ${phrase}`)
    const firstIndexOfSplitter = phrase.indexOf(splitter)

    const initialPhrase = phrase.slice(0, firstIndexOfSplitter)
    console.log(`Initial phrase is ${initialPhrase}`)

    const restOfPhrase = phrase.slice(firstIndexOfSplitter+1, phrase.length)
    console.log(`Rest of phrase is ${restOfPhrase}`)

    const smallerSolution =  stringSplitter(restOfPhrase, splitter)
    console.log(`Smaller solution is ${smallerSolution}`)

    smallerSolution.unshift(initialPhrase);

    return smallerSolution;

}

console.log(stringSplitter("Hello-there-everyone -at-school", "-"))