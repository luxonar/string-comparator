function compare() {
    let string1 = document.getElementById('string1').value;
    let string2 = document.getElementById('string2').value;
    let output = document.getElementById('output');

    if (string1 == string2) {
        output.innerHTML = 'identical';
        output.style.color = 'green';
    } else {
        output.innerHTML = 'different';
        output.style.color = 'red';
    }
}