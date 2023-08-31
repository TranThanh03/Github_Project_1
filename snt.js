function kt(a) {
    if(a<2)
        return false;
    else{
        for(let i=2; i<=Math.sqrt(a); i++){
            if(a % i === 0)
                return false;
        }
        return true;
    }
}


function check() {
    let arr = [];
    const n = parseInt(document.getElementById("input").value);
    for (let i = 1; i <= n; i++) {
        if (kt(i) === true){
            arr.push(i);
        }
    }
    document.getElementById("output").value = arr.join(", ");
    const array = 'Thanh Tran Van 2210'; 
    const outputWidth = array.length * 100;
    // outputWidth = Math.min(Math.max(outputWidth, 50), 300);
    output.style.width = outputWidth + 'px';
}

function xoa() {
    output.style.width = "";
}