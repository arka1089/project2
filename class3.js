let timer;
let totalTime;
let remainingTime;
const b1=document.getElementById('btn');//start
const b2=document.getElementById('btn1');//
const b3=document.getElementById('btn2');
const bar=document.getElementById('mybar');
function startTimer() {  
    const val=document.getElementById('mytext').value
    const matches = val.match(/(\d+)m/); 
    if (matches) {  
        totalTime = parseInt(matches[1]) * 60;  
    } else {  
        alert("Please enter time in minutes (e.g., 2m)");  
        return;  
    }  

    remainingTime = totalTime;  
    bar.style.width = '0%'; 

    timer = setInterval(() => {  
        if (remainingTime <= 0) {  
            clearInterval(timer);  
            alert("Time's up!");  
        } else {  
            remainingTime--;  
            console.log(remainingTime);
            updateBar();  
        }  
    }, 1000);  
}  

  
function updateBar() {  
    const percentage = ((totalTime - remainingTime) / totalTime) * 100;  
    bar.style.width = percentage + '%';  
}  

 
function pauseTimer() {  
    clearInterval(timer);  
}  

function resetTimer() {  
    clearInterval(timer);  
    remainingTime = null;  
    bar.style.width = '0%';
    document.getElementById('mytext').value = ''; // Clear input field  
}  


b1.onclick = startTimer;  
b2.onclick = pauseTimer;  
b3.onclick = resetTimer;  




