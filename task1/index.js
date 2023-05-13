
//TASK 1

const countEvensAndOdds = (numbers) => {
    let evenCount = 0
    let oddCount = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }
    numbers = `evens : ${evenCount} , odd : ${oddCount}`
    return numbers
}
console.log(countEvensAndOdds([1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84]))




