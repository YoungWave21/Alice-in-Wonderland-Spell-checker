// Spell Check Start Code

// Global Variables
let dictionary;
let aliceWords;

// Load Data Files into Global Variables
loadDictionary();
loadAliceText();


document.getElementById("submit-dict").addEventListener("click", searchDictionary);
document.getElementById("submit-full").addEventListener("click", searchAlice);


function searchDictionary() {
    // Get user word and convert to lowercase
    let userWord = document.getElementById("word-dict").value;
    userWord = userWord.toLowerCase();

    let type = document.getElementById("algorithm-type-dict").value;

    if (type == "linear") {
        index = linearSearch(dictionary, userWord);
        if (index == -1) {
            document.getElementById("dict-result").innerHTML = "Linear Search: " + userWord + " is NOT in the dictionary";
        } else {
            document.getElementById("dict-result").innerHTML = "Linear Search: '" + userWord + "' IS in the dictionary at position: " + index;
        }
    } else {
        index = binarySearch(dictionary, userWord);
        if (index == -1) {
            document.getElementById("dict-result").innerHTML = "Binary Search: " + userWord + " is NOT in the dictionary";
        } else {
            document.getElementById("dict-result").innerHTML = "Binary Search: '" + userWord + "' IS in the dictionary at position: " + index;
        }
    }
}

function searchAlice() {
    let type = document.getElementById("algorithm-type-dict").value;
    if (type == "linear") {
        let wordsmismatch = 0;
        for (let word = 0; word < aliceWords.length; word++) {
            if (linearSearch(dictionary, aliceWords[word].toLowerCase()) == -1) {
                wordsmismatch++;
                console.log(`${aliceWords[word].toLowerCase()} is NOT in the dictionary.`)
            }
        }
        document.getElementById("full-results").innerHTML = wordsmismatch + " words NOT found in the dictionary.";
    } else {
        let wordsmismatch = 0;
        for (let word = 0; word < aliceWords.length; word++) {
            if (binarySearch(dictionary, aliceWords[word].toLowerCase()) == -1) {
                wordsmismatch++;
                console.log(`${aliceWords[word].toLowerCase()} is NOT in the dictionary.`)
            }
        }
        document.getElementById("full-results").innerHTML = wordsmismatch + " words NOT found in the dictionary.";
    }
}


// LINEAR SEARCH FUNCTION CRITERIA
// Search the anArray argument for the item argument using the linear search algorithm.
// If item found, return index where found, else return -1.
function linearSearch(anArray, item) {
    for (let word = 0; word < anArray.length; word++) {
        if (item == anArray[word]) {
            return word;
        }
    }
    return -1;
}

// BINARY SEARCH FUNCTION CRITERIA
// Search anArray for the item using the binary search algorithm.
// If item found, return index where found, else return -1.
function binarySearch(arr, value) {
    let high_index = arr.length - 1;
    let low_index = 0;
    let middle_index = 0
    while (low_index <= high_index) {
        middle_index = Math.floor((high_index + low_index) / 2)
        if (arr[middle_index] == value) {
            return middle_index;
        } else if (value > arr[middle_index]) {
            low_index = middle_index + 1;
        } else if (value < arr[middle_index]) {
            high_index = middle_index - 1;
        }
    }
    return -1;
}

