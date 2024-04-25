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
    '36',
    '36',
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
]

const LADIEFALSE = [
    'ca',
    'cj',
    'cn',
    'co',
    'cq',
    'cs',
]

file = '';
colorHoodieLadie = true;
directory = 'T-Shirt';
preis = '16';

function shopclick(field){
    for (i=0; i<FIELDS.length; i++){
        if (FIELDS[i].match(field)){
            index=i;
            break;
        }
    }
    if (index < 4){
        directory = FILES[index];
        preis = NAMES[index];
    }
    else {
        file = FILES[index];
        colorField = FIELDS[index];
        color = NAMES[index];
    }
    if (directory == 'Hoodie Ladie'){
        for (j = 0; j < LADIEFALSE.length; j++){
            document.getElementById(LADIEFALSE[j]).style.opacity = '10%';
            document.getElementById(LADIEFALSE[j]).style.cursor = 'auto';
        }
    }
    else {
        for (j = 0; j < LADIEFALSE.length; j++){
            document.getElementById(LADIEFALSE[j]).style.opacity = '100%';
            document.getElementById(LADIEFALSE[j]).style.cursor = 'auto';
        }
    }
    if (file == ''){
        document.getElementById('shop-img').src = 'Material/Shopvorschau/' + directory + '/AshGrey.jpg';
        document.getElementById('shop-result').innerHTML = '<b>' + directory + ' "Ash Grey" ' + preis + '€.</b><br>* Abbildungen können vom Original abweichen.';
    }
    else {
        if (directory == 'Hoodie Ladie'){
            for (j = 0; j < LADIEFALSE.length; j++){
                if (LADIEFALSE[j].match(colorField)){
                    document.getElementById('shop-img').src = 'Material/Shopvorschau/false.jpg';
                    document.getElementById('shop-result').innerHTML = '<b>Nicht verfügbar.</b><br>* Abbildungen können vom Original abweichen.';
                    colorHoodieLadie = false
                    break;
                }
                else {
                    colorHoodieLadie = true;
                }
            }
            if (colorHoodieLadie == true) {
                document.getElementById('shop-img').src = 'Material/Shopvorschau/' + directory + '/' + file + '.jpg';
                document.getElementById('shop-result').innerHTML = '<b>' + directory + ' "' + color + '" ' + preis + '€.</b><br>* Abbildungen können vom Original abweichen.';
            }
        }
        else {
            for (j = 0; j < LADIEFALSE.length; j++){
                document.getElementById(LADIEFALSE[j]).style.opacity = '100%';
                document.getElementById(LADIEFALSE[j]).style.cursor = 'pointer';
            }
            document.getElementById('shop-img').src = 'Material/Shopvorschau/' + directory + '/' + file + '.jpg';
            document.getElementById('shop-result').innerHTML = '<b>' + directory + ' "' + color +'" ' + preis + '€.</b><br>* Abbildungen können vom Original abweichen.';
        }
    }
}