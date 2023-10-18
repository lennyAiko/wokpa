export default function getTrimString(sentence: string): string {
    if (sentence.length > 20) {
        return sentence.slice(0, 20) + '...'
    } else {
        return sentence
    }
}