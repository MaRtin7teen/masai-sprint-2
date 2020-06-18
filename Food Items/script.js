function sub(){
    var foodObj ={food:'',qty:'',amt:'',dis:'',tax:''};
    var food = document.getElementById('food_items').value;
    foodObj.food = food;
    var qty = document.getElementById('qty').value;
    foodObj.qty = qty;
    // var dis = document.getElementById('dis').value;
    // foodObj.dis = dis;
    // var gst = document.getElementById('gst').value;
    // foodObj.gst = gst;
    update(foodObj);
}
function update(foodObj){
    if( foodObj.food == "DOSA"){
        foodObj.amt = 40;
    }
    else if( foodObj.food == "PULAO"){
        foodObj.amt = 80;
    }
    else if( foodObj.food == "IDLI"){
        foodObj.amt = 30;
    }
    else if( foodObj.food == "FRIED RICE"){
        foodObj.amt = 100;
    }
    else if( foodObj.food == "PAROTHA"){
        foodObj.amt = 50;
    }
    else if( foodObj.food == "PURI"){
        foodObj.amt = 45;
    }
    //Quantity-------------------
    if ( foodObj.qty > 1){
        foodObj.amt = foodObj.amt * foodObj.qty;
    }
    //TAX-------------------------
    if ( foodObj.amt > 0){
        foodObj.tax = 0.05 * foodObj.amt;
        foodObj.amt = foodObj.amt + foodObj.tax;
    }
    //Discount--------------------
    if ( foodObj.amt < 100){
        foodObj.dis = 0.02 * foodObj.amt;
        foodObj.amt = foodObj.amt - foodObj.dis;
    }
    else{
        foodObj.dis = 0.04 * foodObj.amt;
        foodObj.amt = foodObj.amt - foodObj.dis;
    }
    var update = document.getElementById('update');
    var div = document.createElement('div');
    var f_item = document.createElement('h3');
    f_item.innerHTML = foodObj.food;
    var f_qty = document.createElement('h3');
    f_qty.innerHTML = foodObj.qty;
    console.log(foodObj.qty)
    var f_tax = document.createElement('h3');
    f_tax.innerHTML = foodObj.tax;
    var f_dis = document.createElement('h3');
    f_dis.innerHTML = foodObj.dis;
    var f_amt = document.createElement('h3');
    f_amt.innerHTML = foodObj.amt;
    update.appendChild(div);
    div.appendChild(f_item);
    div.appendChild(f_qty);
    div.appendChild(f_tax);
    div.appendChild(f_dis);
    div.appendChild(f_amt);
    empty();
}
function empty(){
    document.getElementById('food_items').value = "";
    document.getElementById('qty').value = "";
}