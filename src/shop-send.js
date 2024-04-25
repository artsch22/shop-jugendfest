function sendPost(){
    if (cookieStat==true){
        basket=getBasket('basket');
        sum=getCookie('preis');
        person=getCookie('person').split(',');
    }
    for (i = 0; i<=basket.length; i++){
        if (basket[i].length!=4){
            basketcount=i;
            break;
        }
    }
    let sendBasket = ['',]
    k=0;
    for (i=0; i<basketcount; i++){
        temp = '';
        temp+=basket[i][0];
        temp+=' ';
        temp+=basket[i][1];
        temp+=' ';
        temp+=basket[i][2];
        for (j=0; j<basket[i][3];j++){
            sendBasket[i+k+j]=temp;
            console.log(temp);
        }
        k+=j-1;
        console.log(sendBasket);
    }
    preis='';
    preis+=sum;
    preis+='€';
    if (person[4]!=''){
        temp='';
        temp=person[4].split(` `);
        if (temp[0]=='JG' || temp[0]=='Jg' || temp[0]=='jG' || temp[0]=='jg'){
            person [3]=person[4];
        }
        else{
            abholort = '';
            abholort+='JG ';
            abholort+=person[4];
            person[3]=abholort;
        }
    } 
    const d = new Date();
    let time = d.toISOString();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://form-service.churchdesk.com/forms/66221ed2ddcce60007d5868a/submissions?organizationId=5298");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    const body = JSON.stringify({
        updatedAt:time,
        data:{
            person:{
                peopleFirstName: person[0],
                peopleLastName: person[1],
                peopleEmail: person[2],
            },
            abholort: person[3],
            preis: preis,
            merch1: sendBasket[0],
            merch2: sendBasket[1],
            merch3: sendBasket[2],
            merch4: sendBasket[3],
            merch5: sendBasket[4],
            merch6: sendBasket[5],
            merch7: sendBasket[6],
            merch8: sendBasket[7],
            merch9: sendBasket[8],
            merch10: sendBasket[9],
            merch11: sendBasket[10],
            merch12: sendBasket[11],
            merch13: sendBasket[12],
            merch14: sendBasket[13],
            merch15: sendBasket[14],
            merch16: sendBasket[15],
            merch17: sendBasket[16],
            merch18: sendBasket[17],
            merch19: sendBasket[18],
            merch20: sendBasket[19],
            merch21: sendBasket[20],
            merch22: sendBasket[21],
            merch23: sendBasket[22],
            merch24: sendBasket[23],
            merch25: sendBasket[24],
            merch26: sendBasket[25],
            merch27: sendBasket[26],
            merch28: sendBasket[27],
            merch29: sendBasket[28],
            merch30: sendBasket[29],
            merch31: sendBasket[30],
            merch32: sendBasket[31],
            merch33: sendBasket[32],
            merch34: sendBasket[33],
            merch35: sendBasket[34],
            merch36: sendBasket[35],
            merch37: sendBasket[36],
            merch38: sendBasket[37],
            merch39: sendBasket[38],
            merch40: sendBasket[39],
        }
    });
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
            person=['','','','','',];
            basket=emptybasket;
            preis=0;
            if(cookieStat==true){
                setCookie('basket', basket);
                setCookie('preis', preis);
            }     
            fail = false;
            window.location.href = './danke.html'
        } 
        else {
            console.log(`Error: ${xhr.status}`);
            fail = true;
            window.location.href = './error.html'
        }
    };
    xhr.send(body);
    if (fail == true){
        const xht = new XMLHttpRequest();
        text = JSON.parse(xhr.response)
        const obj = {
            chat_id: -4107946098, // Telegram chat id
            text: text // The text to send
        };
        xht.open("POST", "https://api.telegram.org/bot6977759735:AAEAteXeiBaOihaBP_i9QYP3ODxd5WtbER0/sendMessage", true);
        xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        xht.send(JSON.stringify(obj));
    }
}