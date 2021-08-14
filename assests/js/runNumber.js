function runNum(){
    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);

    // function runnumber
    function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
        const startTime = performance.now()
        function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime
        if (elapsedTime > duration) {
            callback(finalNumber)
        } else {
            const rate = elapsedTime / duration
            const currentNumber = Math.round(rate * finalNumber)
            callback(currentNumber)
            requestAnimationFrame(updateNumber)
        }
        }
        requestAnimationFrame(updateNumber)
    }

    // check animation runnumber of class row__what
    var check = 0,check2 = 0;
    var rowWhat = $$('.row__what');
    rowWhat.forEach((val)=>{
        val.style.animation = 'none';
    })
    window.addEventListener("scroll",()=>{
    var x = pageYOffset;
    if (x > 2020 && check ==0){
            check = 1;
            animateNumber(127, 3000, 0, function (number) {
                const formattedNumber = number.toLocaleString()
                document.querySelector('.info__num1').innerText = formattedNumber
            })
                
            animateNumber(150, 3000, 0, function (number) {
                const formattedNumber = number.toLocaleString()
                document.querySelector('.info__num2').innerText = formattedNumber
            })   
            animateNumber(10, 3000, 0, function (number) {
                const formattedNumber = number.toLocaleString()
                document.querySelector('.info__num3').innerText = formattedNumber
            })
        }
        if (x > 3057 && check2 == 0){
            check2 = 1;
            rowWhat.forEach((val)=>{
                val.style.animation = 'widthCount 2s forwards';
            })
            animateNumber(95, 1500, 0, function (number) {
                const formattedNumber = number.toLocaleString()
                document.querySelector('.whatwedo__num1').innerText = formattedNumber
            })
            
            animateNumber(80, 1500, 0, function (number) {
                const formattedNumber = number.toLocaleString()
                document.querySelector('.whatwedo__num2').innerText = formattedNumber
            })
            
            animateNumber(75, 1500, 0, function (number) {
                const formattedNumber = number.toLocaleString()
                document.querySelector('.whatwedo__num3').innerText = formattedNumber
            })
            animateNumber(60, 1500, 0, function (number) {
                const formattedNumber = number.toLocaleString()
                document.querySelector('.whatwedo__num4').innerText = formattedNumber
            })
        } 
    })

}

export default runNum();