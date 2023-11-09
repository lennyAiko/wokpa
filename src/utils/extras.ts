/* 
* This file contains all miscellaneous functinos
*/

export function TwoDigits (number: number): string | number {
    
    const numberLength = number.toString().length
    
    if (numberLength < 2) {
        return `0${number}`
    } else {
        return number
    }
}

export function SubscribeDigitConvert (number: number): string | number {

    const numberLength = number.toString().length

    const strNumber = number.toString()

    switch(numberLength) {
        case 3:
            return `${strNumber.slice(0,1)}K`
            break
        case 4:
            return `${strNumber.slice(0,1)}.${strNumber.slice(1,2)}K`
            break
        case 5:
            return `${strNumber.slice(0,3)}K`
            break
        case 6:
            return `${strNumber.slice(0,1)}M`
            break
        case 7:
            return `${strNumber.slice(0,1)}.${strNumber.slice(1,2)}M`
            break
        case 8:
            return `${strNumber.slice(0,3)}M`
            break
        default: return number
    }
}

const Extras = {
    TwoDigits, SubscribeDigitConvert
}

export default Extras