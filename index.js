// Reusable functions
function getPackOfCommandsById(elementId){
    const element = document.getElementById(elementId);
    const h1 = document.createElement('h1');
    h1.innerHTML = `
    <h1>Economy 500</h1>
    `
    let clickCount = 0;
    // const anotherElement = document.getElementsByClassName(elementIdAnother);
    element.addEventListener('click', function(){
        element.classList.add('bg-green-500');
        document.getElementById('show-bus-number').appendChild(h1);
        if(clickCount > 6){
            clickCount++;
            alert('Maximum clicks reached ');
            clickCount = 0; 
        }
    })
}
function alertWhenClickLimitReachesOutOfBoundary(){
    if('click' === 6){
        alert('Maximum clicks reached');
    }
}
getPackOfCommandsById('A1');
getPackOfCommandsById('A2');
getPackOfCommandsById('A3');
getPackOfCommandsById('A4');
// ------------------------------
getPackOfCommandsById('B1');
getPackOfCommandsById('B2');
getPackOfCommandsById('B3');
getPackOfCommandsById('B4'); 


 
