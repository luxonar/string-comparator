window.onload = function() {
    getParams();
    compare();
};

function getParams() {
    const params = new URLSearchParams(window.location.search);
    const string1 = params.get("first") || "";
    const string2 = params.get("second") || "";
    document.getElementById('string1').value = string1;
    document.getElementById('string2').value = string2;
}

function compare() {
    let string1 = document.getElementById('string1').value;
    let string2 = document.getElementById('string2').value;
    let output = document.getElementById('output');

    const params = new URLSearchParams(window.location.search);
    params.set("first", string1);
    params.set("second", string2);
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);

    if (string1 == string2) {
        output.innerHTML = 'identical';
        output.style.color = 'green';
    } else {
        output.innerHTML = 'different';
        output.style.color = 'red';
    }
}
