workingId = '';
sum=0;
function basketContent(){        
    if (cookieStat == true){
        basket = getBasket("basket");
    }
    for (i = 0; i<=basket.length; i++){
        if (basket[i].length!=4){
            basketcount=i;
            break;
        }
    }
    var divContent = document.getElementById('basket-content');
    if (basket[0].length == 4){
        document.getElementById('basket-content-text').style.display = 'none';
    }
    else {
        document.getElementById('basket-content-text').style.display = 'block';
    }
    area='';
    sum = 0;
    for (j=0; j<=basketcount; j++){
        if (basketcount == 0){
            break;
        }
        if (j == basketcount){
            area+='"area'+(j+1)+'"';
            var divInner = document.createElement('div');
            divInner.id = "sum-div";
            divInner.className = 'content-items';
            divInner.style.gridArea = 'area'+(j+1);
            divContent.appendChild(divInner);
            var p = document.createElement('p');
            var b = document.createElement('b');
            b.id = 'sum';
            b.innerText = "Summe: " + countSum() + "€";
            p.appendChild(b);
            divInner.appendChild(p);
            break;
        }
        area+='"area'+(j+1)+'"';
        var divInner = document.createElement('div');
        divInner.id = "iner"+(j+1);
        divInner.className = 'content-items';
        divInner.style.gridArea = 'area'+(j+1);
        divContent.appendChild(divInner);
        var img = document.createElement('img');
        directory = basket[j][0];
        console.log(directory);
        color = basket[j][1];
        size = basket[j][2];
        quantity = basket[j][3];
        file = FILES[NAMES.indexOf(color)];
        preis = NAMES[FILES.indexOf(directory)];
        img.src = 'Material/Shopvorschau/' + directory + '/' + file + '.jpg';
        img.id = 'img'+(j+1);
        img.className = 'content-items-img'
        img.style.gridArea = 'img'
        divInner.appendChild(img);
        var title = document.createElement('p');
        title.innerHTML = directory+' in der Farbe '+color+' in der Größe '+size+'</br><b>Preis: '+preis+'€</b>';
        title.id = 'title'+(j+1);
        title.className = 'content-items-title';
        title.style.gridArea = 'title';  
        divInner.appendChild(title);  
        var quan = document.createElement('div');
        quan.innerHTML = '<p><b>Menge: </b><b>'+quantity+'</b></p>';
        quan.id = 'quantity'+(j+1);
        quan.setAttribute('onclick', 'basketSelectQuantity(this.id);');
        quan.className = 'content-items-quantity';
        quan.style.gridArea = 'quantity';  
        divInner.appendChild(quan);  
        var del = document.createElement('p');
        del.innerText = '🗑️'
        del.id = 'delete'+(j+1);
        del.setAttribute('onclick', 'basketDelete(this.id);');
        del.className = 'content-items-delete'
        del.style.gridArea = 'delete';
        divInner.appendChild(del);  
    }
    divContent.style.gridTemplateAreas = (area);
}

function basketSelectQuantity(id){
    workingId = id;
    index = workingId.split('y');
    document.getElementById(id).innerHTML = '<p><b>Menge: </b><b id="quantity-val">'+basket[parseInt(index[1])-1][3]+'</b></p>';
    selectQuantity('basket');
}
function basketSelectedQuantity(){
    document.getElementById(workingId).innerHTML = '<p><b>Menge: </b><b>'+parseInt(quantity)+'</b></p>';
    index = workingId.split('y');
    basket[parseInt(index[1])-1][3] = quantity;
    if(cookieStat == true){
        setCookie('basket', basket);
    document.getElementById('sum').innerText = "Summe: " + countSum() + "€";
    }
}

function countSum(){
    sum = 0;
    for (l=0; l<basketcount; l++){
        quantity = parseInt(basket[l][3]);
        directory = basket[l][0];
        for (m=0; m<FILES.length; m++){
            if (FILES[m].match(directory)){
                preis = parseInt(NAMES[m]);
                break;
            }
        }
        sum += quantity*preis;
    }
    if(cookieStat==true){
        setCookie('preis', sum);
    }
    return(sum);
}

function basketDelete(id){
    if (cookieStat == true){
        basket = getBasket('basket');
    }
    oneBasket = ['',];
    workingId = parseInt(id.split('delete')[1]);
    basket.splice((workingId-1), 1);
    basket.concat(oneBasket);
    document.getElementById('basket-content').remove();
    div = document.createElement('div');
    div.id = 'basket-content';
    div.className = 'basket-content';
    p = document.createElement('p');
    p.id = 'basket-content-text';
    p.innerHTML = '<b>Dein Wahrenkorbist noch leer.</br>Gehe zum Shop und füge Artikel hinzu.</b>';
    div.appendChild(p);
    document.getElementById("basket").appendChild(div);
    setCookie('basket', basket);
    basketContent();
}