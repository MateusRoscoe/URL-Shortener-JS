const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * Converts a number from base 10 to base 62.
 *
 * @param {number} num The number to convert (must be non-negative).
 * @returns {string} The base 62 representation of the number.
 */
function base10_to_base62(num) {
    if (num === 0) {
        return '0'
    }
    let result = ''
    while (num > 0) {
        const remainder = num % 62
        result = chars[remainder] + result
        num = Math.floor(num / 62)
    }
    return result
}

// Example usage
// const number = 46655
// const base62_string = base10_to_base62(number)
// console.log(`${number} in base 10 is ${base62_string} in base 62`)

module.exports = {
    base10_to_base62,
}
