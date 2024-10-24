let string = 'he is a great man';

capitalize(string);

function capitalize(string) {
    let finalString = string[0].toUpperCase();

    for (let i = 1; i < string.length; i++) {
        finalString = finalString + '' + string[i]

        if (string[i] == ' ') {
            finalString = finalString + '' + string[i + 1].toUpperCase()
            i++
        }
    }
    console.log(finalString);
}