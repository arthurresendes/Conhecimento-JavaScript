var output = "";

for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        output += "*";
    }
    output += "\n";
}

window.alert(output);
