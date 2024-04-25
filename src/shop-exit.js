workingId = '';

function exitContent(){        
    if (cookieStat == true){
        basket = getBasket("basket");
        person = getCookie('person').split(',');
    }
    for (i = 0; i<=basket.length; i++){
        if (basket[i].length!=4){
            basketcount=i;
            break;
        }
    }
    var divContent = document.getElementById('exit-content-js')
    area='';
    sum = 0;
    for (j=0; j<=basketcount; j++){
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
            
            area+='"area'+(j+2)+'"';
            var divInner = document.createElement('div');
            divInner.id = "person-div";
            divInner.className = 'exit-content-person';
            divInner.style.gridArea = 'area'+(j+2);
            divContent.appendChild(divInner);
            let innerTextElements = ['Vorname', 'Name', 'E-Mail', 'Abholort',];
            for (k=0;k<4; k++){
                var p = document.createElement('p');
                var b = document.createElement('b');
                if(k==3 && person[4]!=''){
                    b.innerText = innerTextElements[k]+ ': ' + person[4];
                }
                else {
                    b.innerText = innerTextElements[k]+ ': ' + person[k];
                }
                    p.appendChild(b);
                divInner.appendChild(p);
            }
            break;
        }
        area+='"area'+(j+1)+'"';
        var divInner = document.createElement('div');
        divInner.id = "iner"+(j+1);
        divInner.className = 'exit-content-items';
        divInner.style.gridArea = 'area'+(j+1);
        divContent.appendChild(divInner);
        var img = document.createElement('img');
        directory = basket[j][0];
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
        quan.className = 'exit-content-items-quantity';
        quan.style.gridArea = 'quantity';  
        divInner.appendChild(quan);  
    }
    divContent.style.gridTemplateAreas = (area);
}

function basketSelectQuantity(id){
    workingId = id;
    index = workingId.split('y');
    document.getElementById(id).innerHTML = '<p><b>Menge: </b><b id="quantity-val">'+basket[parseInt(index[1])-1][3]+'</b></p>';
    selectQuantity();
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
