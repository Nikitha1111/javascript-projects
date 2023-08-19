
let amountDiscription =document.getElementById("dis")
let button=document.getElementById("btn")
let amount= document.getElementById("Amount")
let div=document.getElementById("div")
let total=document.getElementById("total")
let useramount
let userinput
let sum=0


// Add expences button

 button.addEventListener ('click',function (){
   sum= sum+parseInt(useramount)
    button.style.backgroundColor="green"
    if(userinput!="" && useramount!=0){

    
    let ul=document.createElement("ul")
     ul.style.listStyle="none"
     ul.className="flex"

    let list1=document.createElement("li")
    list1.textContent=userinput
    ul.append(list1)

    let list=document.createElement("li")
    list.textContent = useramount
    ul.append(list)
    div.appendChild(ul)

    total.textContent=`Total expenses:${sum}` ;
    }
    userinput="";
    useramount=0;
    setTimeout(function(){
        button.style.backgroundColor="";
 },800)

 });


// amount discription

 amountDiscription.addEventListener('change',function(e){

     userinput=e.target.value;
       
    if(userinput.length<5 ){

        alert(" ERROR enter valid discription");
        e.target.value="";
    
    }else{
         
        e.target.value="";


    }

});


// expensess amount
amount.addEventListener('change',function(e){

    useramount= e.target.value;

    var amountnumber= /^\d{1,10}$/ ;

   if(!amountnumber.test(useramount)) {

    alert("plese enter a valid digits betwwen 1 to 10");
    e.target.value="";

   }else{

    e.target.value="";

   }

});


















