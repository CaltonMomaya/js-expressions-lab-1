//! Start by creating the variables for the data recorded
const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29


//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
//from F to C using (F-32)*5/9

const day1TempC = (day1TempF - 32) * 5 / 9
const day2TempC_converted = day2TempC  // Already in Celsius
const day3TempC = (day3TempF - 32) * 5 / 9
const day4TempC_converted = day4TempC  // Already in Celsius
const day5TempC = (day5TempF - 32) * 5 / 9
const day6TempC_converted = day6TempC  // Already in Celsius
const day7TempC = (day7TempF - 32) * 5 / 9
const day8TempC_converted = day8TempC  // Already in Celsius
const day9TempC = (day9TempF - 32) * 5 / 9
const day10TempC_converted = day10TempC  // Already in Celsius
const day11TempC = (day11TempF - 32) * 5 / 9
const day12TempC_converted = day12TempC  // Already in Celsius
const day13TempC = (day13TempF - 32) * 5 / 9
const day14TempC_converted = day14TempC  // Already in Celsius
const day15TempC = (day15TempF - 32) * 5 / 9
const day16TempC_converted = day16TempC  // Already in Celsius
const day17TempC = (day17TempF - 32) * 5 / 9
const day18TempC_converted = day18TempC  // Already in Celsius
const day19TempC = (day19TempF - 32) * 5 / 9
const day20TempC_converted = day20TempC  // Already in Celsius
const day21TempC = (day21TempF - 32) * 5 / 9
const day22TempC_converted = day22TempC  // Already in Celsius
const day23TempC = (day23TempF - 32) * 5 / 9
const day24TempC_converted = day24TempC  // Already in Celsius
const day25TempC = (day25TempF - 32) * 5 / 9
const day26TempC_converted = day26TempC  // Already in Celsius
const day27TempC = (day27TempF - 32) * 5 / 9
const day28TempC_converted = day28TempC  // Already in Celsius
const day29TempC = (day29TempF - 32) * 5 / 9
const day30TempC_converted = day30TempC  // Already in Celsius

// All temperatures in Celsius array for easy analysis
const allTempsC = [
    day1TempC, day2TempC, day3TempC, day4TempC, day5TempC,
    day6TempC, day7TempC, day8TempC, day9TempC, day10TempC,
    day11TempC, day12TempC, day13TempC, day14TempC, day15TempC,
    day16TempC, day17TempC, day18TempC, day19TempC, day20TempC,
    day21TempC, day22TempC, day23TempC, day24TempC, day25TempC,
    day26TempC, day27TempC, day28TempC, day29TempC, day30TempC
]

console.log("All temperatures in Celsius:", allTempsC)

// Optional: Display rounded values for readability
const allTempsCRounded = allTempsC.map(temp => Math.round(temp * 10) / 10)
console.log("All temperatures in Celsius (rounded):", allTempsCRounded)

////// from C to F using (c*9/5)+32

const day1TempF_converted = day1TempF  // Already in Fahrenheit
const day2TempF = (day2TempC * 9 / 5) + 32
const day3TempF_converted = day3TempF  // Already in Fahrenheit
const day4TempF = (day4TempC * 9 / 5) + 32
const day5TempF_converted = day5TempF  // Already in Fahrenheit
const day6TempF = (day6TempC * 9 / 5) + 32
const day7TempF_converted = day7TempF  // Already in Fahrenheit
const day8TempF = (day8TempC * 9 / 5) + 32
const day9TempF_converted = day9TempF  // Already in Fahrenheit
const day10TempF = (day10TempC * 9 / 5) + 32
const day11TempF_converted = day11TempF  // Already in Fahrenheit
const day12TempF = (day12TempC * 9 / 5) + 32
const day13TempF_converted = day13TempF  // Already in Fahrenheit
const day14TempF = (day14TempC * 9 / 5) + 32
const day15TempF_converted = day15TempF  // Already in Fahrenheit
const day16TempF = (day16TempC * 9 / 5) + 32
const day17TempF_converted = day17TempF  // Already in Fahrenheit
const day18TempF = (day18TempC * 9 / 5) + 32
const day19TempF_converted = day19TempF  // Already in Fahrenheit
const day20TempF = (day20TempC * 9 / 5) + 32
const day21TempF_converted = day21TempF  // Already in Fahrenheit
const day22TempF = (day22TempC * 9 / 5) + 32
const day23TempF_converted = day23TempF  // Already in Fahrenheit
const day24TempF = (day24TempC * 9 / 5) + 32
const day25TempF_converted = day25TempF  // Already in Fahrenheit
const day26TempF = (day26TempC * 9 / 5) + 32
const day27TempF_converted = day27TempF  // Already in Fahrenheit
const day28TempF = (day28TempC * 9 / 5) + 32
const day29TempF_converted = day29TempF  // Already in Fahrenheit
const day30TempF = (day30TempC * 9 / 5) + 32

// All temperatures in Fahrenheit array for easy analysis
const allTempsF = [
    day1TempF, day2TempF, day3TempF, day4TempF, day5TempF,
    day6TempF, day7TempF, day8TempF, day9TempF, day10TempF,
    day11TempF, day12TempF, day13TempF, day14TempF, day15TempF,
    day16TempF, day17TempF, day18TempF, day19TempF, day20TempF,
    day21TempF, day22TempF, day23TempF, day24TempF, day25TempF,
    day26TempF, day27TempF, day28TempF, day29TempF, day30TempF
]

console.log("All temperatures in Fahrenheit:", allTempsF)



//////////! Start the calculation of the total temperatures
// Original temperature data

// Convert Celsius temperatures to Fahrenheit for calculation
const day2TempF_converted = (day2TempC * 9 / 5) + 32
const day4TempF_converted = (day4TempC * 9 / 5) + 32
const day6TempF_converted = (day6TempC * 9 / 5) + 32
const day8TempF_converted = (day8TempC * 9 / 5) + 32
const day10TempF_converted = (day10TempC * 9 / 5) + 32
const day12TempF_converted = (day12TempC * 9 / 5) + 32
const day14TempF_converted = (day14TempC * 9 / 5) + 32
const day16TempF_converted = (day16TempC * 9 / 5) + 32
const day18TempF_converted = (day18TempC * 9 / 5) + 32
const day20TempF_converted = (day20TempC * 9 / 5) + 32
const day22TempF_converted = (day22TempC * 9 / 5) + 32
const day24TempF_converted = (day24TempC * 9 / 5) + 32
const day26TempF_converted = (day26TempC * 9 / 5) + 32
const day28TempF_converted = (day28TempC * 9 / 5) + 32
const day30TempF_converted = (day30TempC * 9 / 5) + 32

// Sum all temperatures in Fahrenheit
const tot_temperature_in_fahrenheit = 
    day1TempF + day2TempF_converted + day3TempF + day4TempF_converted + day5TempF +
    day6TempF_converted + day7TempF + day8TempF_converted + day9TempF + day10TempF_converted +
    day11TempF + day12TempF_converted + day13TempF + day14TempF_converted + day15TempF +
    day16TempF_converted + day17TempF + day18TempF_converted + day19TempF + day20TempF_converted +
    day21TempF + day22TempF_converted + day23TempF + day24TempF_converted + day25TempF +
    day26TempF_converted + day27TempF + day28TempF_converted + day29TempF + day30TempF_converted

// Convert Fahrenheit temperatures to Celsius for calculation
const day1TempC_converted = (day1TempF - 32) * 5 / 9
const day3TempC_converted = (day3TempF - 32) * 5 / 9
const day5TempC_converted = (day5TempF - 32) * 5 / 9
const day7TempC_converted = (day7TempF - 32) * 5 / 9
const day9TempC_converted = (day9TempF - 32) * 5 / 9
const day11TempC_converted = (day11TempF - 32) * 5 / 9
const day13TempC_converted = (day13TempF - 32) * 5 / 9
const day15TempC_converted = (day15TempF - 32) * 5 / 9
const day17TempC_converted = (day17TempF - 32) * 5 / 9
const day19TempC_converted = (day19TempF - 32) * 5 / 9
const day21TempC_converted = (day21TempF - 32) * 5 / 9
const day23TempC_converted = (day23TempF - 32) * 5 / 9
const day25TempC_converted = (day25TempF - 32) * 5 / 9
const day27TempC_converted = (day27TempF - 32) * 5 / 9
const day29TempC_converted = (day29TempF - 32) * 5 / 9

// Sum all temperatures in Celsius
const tot_temperature_in_celsius = 
    day1TempC_converted + day2TempC + day3TempC_converted + day4TempC + day5TempC_converted +
    day6TempC + day7TempC_converted + day8TempC + day9TempC_converted + day10TempC +
    day11TempC_converted + day12TempC + day13TempC_converted + day14TempC + day15TempC_converted +
    day16TempC + day17TempC_converted + day18TempC + day19TempC_converted + day20TempC +
    day21TempC_converted + day22TempC + day23TempC_converted + day24TempC + day25TempC_converted +
    day26TempC + day27TempC_converted + day28TempC + day29TempC_converted + day30TempC

// Calculate average temperatures
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30

// Display results
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit)
console.log("Total temperature in Celsius:", tot_temperature_in_celsius)
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit)
console.log("Average temperature in Celsius:", avg_temperature_in_celsius)

// Rounded results for better readability
console.log("\nRounded Results:")
console.log("Average temperature in Fahrenheit:", Math.round(avg_temperature_in_fahrenheit * 10) / 10 + "°F")
console.log("Average temperature in Celsius:", Math.round(avg_temperature_in_celsius * 10) / 10 + "°C")







//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};