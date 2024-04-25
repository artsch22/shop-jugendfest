let basket = '';
let emptybasket = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
maxbasketsize = 40;
function tobasket(){
    basketcount = 0;
    index = 0;
    exist = false;
    itemval = ['','','','',];
        if (cookieStat == true){
        basket = getBasket("basket")
        }
        if (basket == ''){
            basket = emptybasket;}
        for (m = 0; m<=basket.length; m++){
            if (basket[m].length == 4){
                basketcount+=parseInt(basket[m][3]);
            }
            else{
                break;
            }
        }
        if (basketcount > 0){
            for (i=0; i<basket.length; i++){
                if (basket[i].length == 4){
                    for(j=0; j<=i; j++){
                        if (basket[j][0].match(directory) && basket[j][1].match(color) && basket[j][2].match(size)){
                            index = j;
                            quan = quantity + parseInt(basket[index][3]);
                            exist = true;
                            break;
                        }
                    }
                }
                if (index == j){break;}
            }
        }
        if (exist != true) {
            for (m = 0; m<=basket.length; m++){
                if (basket[m].length != 4){
                    index = m;
                    break;
                }
            }
            quan = quantity;
        }
        if (basketcount+quantity <= maxbasketsize && quan <= 10){
            itemval[0] = directory;
            itemval[1] = color;
            itemval[2] = size;
            itemval[3] = quan;
            basket[index] = itemval;
            if(cookieStat == true){
                setCookie('basket', basket);
            }
            inbasket=true;
        }
        else {
            inbasket=false;
        }
    tobasketalert(inbasket, itemval, quantity);
}

function tobasketalert(stat, item, quantity){
    var div = document.createElement("div");
    div.id = 'to-basket-alert';
    if (stat == true){
        div.innerHTML = '<p id="Text"><b>Du hast '+ quantity + ' ' + item[0] +' mit der Farbe ' + item[1] + ' und der Größe ' + item[2] +' zum Warenkorb hinzugefügt</b></p><span class="box" id="box1" onclick="closeAlert();">schließen</span><span class="box" id="box2" onclick="openbasket();">Warenkorb</span>';
    }
    else if (stat == false){
        div.innerHTML = '<p id="Text"><b>Du hast die maximale Größe des Warenkorbs überschritten.</b></p><span class="box" id="box1" onclick="closeAlert();">schließen</span><span class="box" id="box2" onclick="openbasket();">Warenkorb</span>';
    }
    document.getElementById("shop").appendChild(div);
    getAlertId(div.id);
}

function openbasket(){
    window.location.href = './basket.html';
}