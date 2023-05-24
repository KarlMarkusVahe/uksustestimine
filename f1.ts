export function kasPositiivne(arv:number){
    return arv>0;
}

export function countLetterA(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            count++;
        }
    }
    return count;
}

export function countAllLetterA(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}