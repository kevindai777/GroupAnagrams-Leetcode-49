//Objective is to group the anagrams together in a 1-D array.

let strings = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']


//O(n*klogk) where n is the length of the input array and k is the max length
//of a string in the input array.

let map = {}
let result = []

//For each string, sort it and map it to the hashmap 
for (let string of strings) {
    let temp = string 
    let sorted = string.split('').sort().join('')

    if (map[sorted] == undefined) {
        map[sorted] = [temp]
    } else {
        map[sorted].push(temp)
    }
}

for (let array in map) {
    result.push(map[array])
}

return result