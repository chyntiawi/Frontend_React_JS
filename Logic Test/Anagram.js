function sortWord(word) {
	let charArr = word.split('');
	for(let i = 0; i < charArr.length; i++) {
        for(let j = 0; j < charArr.length; j++) {
            if(charArr[i] < charArr[j]) {
                let temp = charArr[i];
                charArr[i] = charArr[j];
                charArr[j] = temp;
            }
        }
    }

    return charArr.join('');
}

function groupAnagramWords(words) {
	let anagramMap = {};
    words.forEach(word => {
        let sortedWord = sortWord(word);
        if(!anagramMap[sortedWord]) {
            anagramMap[sortedWord] = [];
        }
        
        anagramMap[sortedWord].push(word);
    });

    return anagramMap;
}

function printAnagramWords(words) {
	let anagramMap = groupAnagramWords(words);
    let sortedWords = Object.keys(anagramMap);
    let anagramWords = [];
    for(let i = 0; i < sortedWords.length; i++) {
        let sortedWord = sortedWords[i];

        anagramWords.push(anagramMap[sortedWord]);
    }

    return anagramWords;
}

let words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
console.log(printAnagramWords(words));