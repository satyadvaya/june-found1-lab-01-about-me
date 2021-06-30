export function countsAsAYes(response){
    // logic to determine if user input should count as a yes
    // return true / false
    response = response.toLowerCase();

    if (response === 'yes' || response === 'yep' || response === 'y') {
        return true;
    } else {
        return false;
    }
}