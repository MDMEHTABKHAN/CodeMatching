document.getElementById('num-initial').addEventListener('change', updateOutput);
document.getElementById('num-operation').addEventListener('change', updateOutput);

function updateOutput() {
    let num = parseInt(document.getElementById('num-initial').value);
    const operation = document.getElementById('num-operation').value;
    const outputElement = document.getElementById('output');
    let output = '';

    while (num > 0) {
        output += num + ' ';
        if (operation === 'num-=3') {
            num -= 3;
        } else if (operation === 'num+=3') {
            num += 3;
        } else if (operation === 'num-=1') {
            num -= 1;
        }
    }
    output += '0';
    outputElement.textContent = output;
}

// Initialize with default values
updateOutput();