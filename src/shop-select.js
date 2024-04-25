const FIELDS = [
    'k0',
    'k1',
    'k2',
    'k3',
    'c0',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'c8',
    'c9',
    'ca',
    'cb',
    'cc',
    'cd',
    'ce',
    'cf',
    'cg',
    'ch',
    'ci',
    'cj',
    'ck',
    'cl',
    'cm',
    'cn',
    'co',
    'cp',
    'cq',
    'cr',
    'cs',
    'ct',
    'S0',
    'S1',
    'S2',
    'S3',
    'S4',
    'S5',
]

const FILES = [
    'T-Shirt',
    'Sweatshirt',
    'Hoodie Men',
    'Hoodie Ladie',
    'White',
    'AshGrey',
    'SportGrey',
    'Charcoal',
    'DarkHeather',
    'Black',
    'LightPink',
    'Pink',
    'Red',
    'Orange',
    'OkayOrange',
    'DustyYellow',
    'Yellow',
    'Lime',
    'Green',
    'BottleGreen',
    'DustyIndigo',
    'DustyMint',
    'LightBlue',
    'Sapphire',
    'Teal',
    'Royal',
    'Navy',
    'Purple',
    'DustyPurple',
    'Bordeaux',
    'Brown',
    'Millitary',
    'Nature',
    'Sand',
]

const NAMES = [
    '16',
    '30',
    '37',
    '37',
    'White',
    'Ash Grey',
    'Sport Grey',
    'Charcoal',
    'Dark Heather',
    'Black',
    'Light Pink',
    'Pink',
    'Red',
    'Orange',
    'Okay Orange',
    'Dusty Yellow',
    'Yellow',
    'Lime',
    'Green',
    'Bottle Green',
    'Dusty Indigo',
    'Dusty Mint',
    'Light Blue',
    'Sapphire',
    'Teal',
    'Royal',
    'Navy',
    'Purple',
    'Dusty Purple',
    'Bordeaux',
    'Brown',
    'Millitary',
    'Nature',
    'Sand',
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
]

const LADIEFALSE = [
    'ca',
    'cn',
    'co',
    'cq',
    'cs',
]

file = 'AshGrey';
directory = 'T-Shirt';
preis = '16';
itemField = 'k0';
colorField = 'c1';
color = 'Ash Grey';
size = 'M';
sizeField = 'S2';
quantity = 1;

function shopclick(field){
    index = FIELDS.indexOf(field);
    if (index < 4){
        directory = FILES[index];
        preis = NAMES[index];
        document.getElementById('img-'+itemField).style = 'border: 2px solid #dadada;';
        itemField = FIELDS[index];
        document.getElementById('img-'+itemField).style = 'border: 3px solid #000000;';
        if (directory == 'Hoodie Ladie'){
            document.getElementById('shop-select-color').style.gridTemplateAreas = '"c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 cb cc cd ce cf cg ch ci cj ck cl cm cp cr ct"';
            for (j=0; j<LADIEFALSE.length; j++){
                document.getElementById(LADIEFALSE[j]).style.display = "none";
            }
        }
        else {
            document.getElementById('shop-select-color').style.gridTemplateAreas = '"c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 ca cb cc cd ce cf cg ch ci cj ck cl cm cn co cp cq cr cs ct"';
            for (j=0; j<LADIEFALSE.length; j++){
                document.getElementById(LADIEFALSE[j]).style.display = "block";
            }
        }
    }
    else if (index < 34) {
        file = FILES[index];
        color = NAMES[index];
        document.getElementById(colorField).style = 'border: 2px solid #dadada;';
        colorField = FIELDS[index];
        document.getElementById(colorField).style = 'border: 3px solid #000000;';
        for (k=0; k<LADIEFALSE.length; k++){
            if (LADIEFALSE[k].match(colorField)){
                Ladie=true;
                break;
            }
            else {Ladie=false}
        }
        if (Ladie == true){
            document.getElementById('shop-select-item').style.gridTemplateAreas = '". k0 k1 k2 . "';
            for (l=0; l<LADIEFALSE.length; l++){
                document.getElementById('k3').style.display = "none";
            }
        }
        else {
            document.getElementById('shop-select-item').style.gridTemplateAreas = '". k0 k1 k2 k3 . "';
            for (l=0; l<LADIEFALSE.length; l++){
                document.getElementById('k3').style.display = "block";
            }
        }
    }
    else{
        document.getElementById(sizeField).style = 'border: 3px solid #dadada';
        size=NAMES[index];
        sizeField=FIELDS[index];
        document.getElementById(sizeField).style = 'border: 3px solid #000000';
    }
    /*
    if (file == '') {
        document.getElementById('shop-img').src = 'Material/Shopvorschau/' + directory + '/AshGrey.jpg';
        document.getElementById('shop-result').innerHTML = '<b>' + directory + ' Ash Grey</b>';
        }*/
    
    document.getElementById('shop-img').src = 'Material/Shopvorschau/' + directory + '/' + file + '.jpg';
    document.getElementById('shop-result').innerHTML = '<b>' + directory +'</b>';
    document.getElementById('shop-selected-color').innerHTML = '<b>Farbe: </b>' + color;
    document.getElementById('shop-selected-size').innerHTML = '<b>Größe: </b>' + size;
}

function selectQuantity(id){
    var div = document.createElement("div")
    div.id = 'select-quantity-alert'
    var table = document.createElement("table");
    table.className = 'scroll';
    let innerTable = "<tr><th>Menge:</th></tr>";
    for (l=1; l<=10; l++){
        innerTable+='<tr><td id="td-'+l+'" onclick="selectedQuantity(this.id)">'+l+'</td></tr>';
    }
    table.innerHTML = innerTable;
    div.innerHTML = table.outerHTML
    //iframe.src = "./cookie-banner.html";
    document.getElementById(id).appendChild(div);
    quantityVal = document.getElementById('quantity-val').innerHTML
    document.getElementById('td-'+quantityVal).style.backgroundColor = '#aadd10';
    getAlertId(div.id);
}
function selectedQuantity(quantityVal){
    quantityArray=quantityVal.split('-');
    document.getElementById('quantity-val').innerHTML = quantityArray[1];
    closeAlert();
    quantity = parseInt(quantityArray[1]);
    if (document.getElementById('basket-headline')){
        basketSelectedQuantity();
    }
}