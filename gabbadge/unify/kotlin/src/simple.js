var array = ["-m", "/test/app", "-w", "us"];

for (var i = 0; i < array.length; i += 2) {
    console.log("option =" + array[i]);
    console.log("value =" + array[i+1])
}


