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
        const A1 = document.getElementById("A1");
        A1.addEventListener("click", function(){
            document.getElementById("Total").append(price.innerText);
        })
    })
}


function getConvertedValue(id){
    const ticketPrice = document.getElementById(id).innerText
    const parseIntTicketPrice = parseInt(ticketPrice);
    return parseIntTicketPrice;
} 