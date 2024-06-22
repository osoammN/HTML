
function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } 
        if (localStorage.clickcount == 10) {
            clicksetzero()
        }

            document.getElementById("result").innerHTML = "Number of clicks: " + localStorage.clickcount;
        }
    }
    function clicksetzero() {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = 1;
            }
            document.getElementById("result").innerHTML = "Number of clicks: " + localStorage.clickcount;
        }
    
}