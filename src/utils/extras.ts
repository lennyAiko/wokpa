/* 
* This file contains all miscellaneous functinos
*/

export default function TwoDigits (number: number): string | number {
    const numberLength = number.toString().length
    
    if (numberLength < 2) {
        return `0${number}`
    } else {
        return number
    }
}