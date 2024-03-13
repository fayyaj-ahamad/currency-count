let inputValue = document.querySelectorAll("input");
let note = document.querySelectorAll(".note");
let totalMoney = document.querySelectorAll(".total-money");
let totalAmt = document.querySelector("#totalamt");
let noteCount = document.querySelector(".noteCount");


// Get Input Value And Divide rupees

let getInputValue = () =>{
        for(let i = 0; i<inputValue.length; i++){
            inputValue[i].addEventListener("input",function(){ 
            if(inputValue[i].value <= 0 ){
                totalMoney[i].innerHTML = "";
                getTotalMoney();
                getQtyOfNote();
                return
            }
            else{
            var finalOutput=0;
                finalOutput =  inputValue[i].value * Number(note[i].firstElementChild.name)
                totalMoney[i].innerHTML =finalOutput;
            }
            getTotalMoney();
            getQtyOfNote(inputValue[i].value);
        }) 
    }
}

// Total Rupees of Count

let getTotalMoney = () =>{
let sum = 0;
    for(let i=0; i<totalMoney.length; i++){
         sum += Number(totalMoney[i].innerHTML);
         totalAmt.innerHTML = sum;
    }
}


// Total Notes of count

let getQtyOfNote = () =>{
var counter =0;
    for(let i=0; i<inputValue.length; i++){
        if(!isNaN(inputValue[i].value)){
            counter += Number(inputValue[i].value);
        }else{
            counter = 0;
        } 
    }
    noteCount.innerHTML = counter;
}


getInputValue();
