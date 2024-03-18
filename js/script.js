const allBtn = document.getElementsByClassName("allBtn");
for(const btn of allBtn){
    btn.addEventListener("click",function(event){
        event.target.classList.add('bg-green-500');
        const h1 = document.createElement('h1');
        h1.innerHTML = `
        <h1>Economy 550</h1>
        <br>
        ` 
        btn.classList.add('hover:bg-green-500');
        const eventTicket = event.target.innerText+h1.innerText;
        const price = document.getElementById("ticket-price");
        document.getElementById("show-bus-number").append(eventTicket)
        // document.getElementById("Total").append(price);
        const budget = document.getElementById("budget").innerText;
        const turnBudgetToNumber = parseInt(budget);
        const decreaseOnClickBudget = turnBudgetToNumber  - 1;
        const decreaseOnClickBudgetTwo = turnBudgetToNumber  - 1 - 1;
        const decreaseOnClickBudgetThree = turnBudgetToNumber  - 1 - 1 - 1;
        const decreaseOnClickBudgetFour = turnBudgetToNumber  - 1 - 1 - 1 - 1;
        const decreaseOnClickBudgetFive = turnBudgetToNumber  - 1 - 1 - 1 - 1 - 1;
        const decreaseOnClickBudgetSix = turnBudgetToNumber  - 1 - 1 - 1 - 1 - 1 - 1;
        const decreaseOnClickBudgetSeven = turnBudgetToNumber  - 1 - 1 - 1 - 1 - 1 - 1 - 1;
        const decreaseOnClickBudgetEight = turnBudgetToNumber  - 1 - 1 - 1 - 1 - 1 - 1 - 1 - 1 ;
        console.log(decreaseOnClickBudget,decreaseOnClickBudgetTwo,decreaseOnClickBudgetThree,decreaseOnClickBudgetFour,decreaseOnClickBudgetFive,decreaseOnClickBudgetSix,decreaseOnClickBudgetSeven,decreaseOnClickBudgetEight);
        // document.getElementById("budget").classList.add("hide")
        // document.getElementById("budget").replace(decreaseOnClickBudget);   
        if(decreaseOnClickBudget === 0){
            alert("Out of seats please try again tomorrow");
        } 
    })
}

// function getUpdatedValue(value){
//     const totalCost = getConvertedValue("ticket-price")
//     const sum = totalCost + parseInt(value);
//     document.getElementById("ticket-price").innerText = sum 
// }
function getConvertedValue(id){
    const ticketPrice = document.getElementById(id).innerText
    const parseIntTicketPrice = parseInt(ticketPrice);
    return parseIntTicketPrice;
} 