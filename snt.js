function checkSnt(i) {
    if(i<2)
        return false;
    else{
        for(let j=2; j<=Math.sqrt(i); j++){
            if(i % j === 0)
                return false;
        }
        return true;
    }
}

function checkInput() {
    let array = [];
    const n = parseInt(document.getElementById("input").value);
    const outputData = document.getElementById("output");
    for (let i = 1; i <= n; i++) {
        if (checkSnt(i) === true){
            array.push(i);
        }
    }
    outputData.value = array.join(", ");
    const outputWidth = array.length * 100;
    outputData.style.width = Math.min(Math.max(outputWidth, 50), 300) + 'px';
}

function resetData() {
    const outputData = document.getElementById("output");
    outputData.style.width = "";
}


document.addEventListener("DOMContentLoaded", function() {
    const checkFont = document.querySelector(".login-form");

    checkFont.addEventListener("submit", function(e) {
        e.preventDefault();
        const resetButton = document.getElementById("reset");
        
        resetButton.addEventListener("click", resetData);
        checkInput();
    });
});
