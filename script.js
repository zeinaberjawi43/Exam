function addlist1(){
    const itemname=document.getElementById("item-name");
    const fruititem=document.getElementById("fruits-items");
    const legumitem=document.getElementById("legumes-items");
    const radio=document.getElementById("radio-btn");
    if(itemname.value==='' && !radio.checked){
        alert('enter the name of fruit or vegetable and choose the type!');
      
    } else{
        if(itemname.value!=='' && radio.checked){
            if(radio.value==="fruits"){
        const div=document.createElement("div");
        div.style="background-color:#FBD9D3;color:red;margin-left:100px;margin-right:100px;margin-top:10px;border-radius:10px;padding:10px 20px 10px 20px;justify-content:center;align-items:center;";
        div.innerHTML+="<p>fruits! - "+itemname.value+"</p>";
        fruititem.appendChild(div); 
        itemname.value="";  

        }else{ if(radio.value==="legumes"){
            const div=document.createElement("div");
            div.style="background-color:babyblue;color:black;margin-left:100px;margin-right:100px;margin-top:10px;border-radius:10px;padding:10px 20px 10px 20px;justify-content:center;align-items:center;";
            div.innerHTML+="<p>legumes! - "+itemname.value+"</p>";
            legumitem.appendChild(div); 
            itemname.value="";
            }
        }
        }
    }
}
function addlist2(){
    const itemname=document.getElementById("item-name");
    const bothitem=document.getElementById("both-items");
    const radio=document.getElementById("radio-btn");
    if(itemname.value==='' && !radio.checked){
        alert('You must write your full name!');
      
    } else{
        if(radio.value==="fruits"){
            const div=document.createElement("div");
            div.style="background-color:#FBD9D3;color:black;margin-left:100px;margin-right:100px;margin-top:10px;border-radius:10px;padding:10px 20px 10px 20px;justify-content:center;align-items:center;";
            div.innerHTML+="<p>fruits - "+itemname.value+"</p>";
            bothitem.appendChild(div); 
            itemname.value="";   
        }
        if(radio.value==="legumes"){
            const div=document.createElement("div");
            div.style="background-color:#FBD9D3;color:black;margin-left:100px;margin-right:100px;margin-top:10px;border-radius:10px;padding:10px 20px 10px 20px;justify-content:center;align-items:center;";
            div.innerHTML+="<p>legumes - "+itemname.value+"</p>";
            legumitem.appendChild(div); 
            itemname.value="";
        }
    }
}

  