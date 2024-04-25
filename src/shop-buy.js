let person = ['','','','','',];
let filled = false;
formFields = ['#field-fname', '#field-name', '#field-mail', '#field-abholort', '#field-jg'];

function fillPerson(){
    if (cookieStat==true){
        person=getCookie('person').split(',');
    }
    if (person[0]!=''){
        for (i=0; i<5; i++){
            document.querySelector(formFields[i]).value = person[i];
        }
    }
}

function abholortJG(){
    val = document.querySelector("#field-abholort").value;
    if (val=="JG"){
        document.getElementById("text-jg").style.display = 'block';
        document.getElementById("field-jg").style.display = 'block';
        document.getElementById("field-jg").required = true;
    }
    else {
        document.getElementById("text-jg").style.display = 'none';
        document.getElementById("field-jg").style.display = 'none';
        document.querySelector("#field-jg").value = '';
        document.getElementById("field-jg").required = false;
    }
}

function checkForm(){
    var mail=false;
    if (filled == false){
        for (i=0; i<5; i++){
            temp = document.querySelector(formFields[i]);
            if (temp.value == ''){
                temp.style.border = '2px solid #ff1100';
                mail=true;
            }
            if (document.getAnimations("field-abholort").value != 'JG' && i==3){i+=1;}
        }
        if (mail==false){
            document.getElementById("field-mail").style.border = '2px solid #ff1100';
        }
        window.location.href = '#buy-input';
    }
}

function inputCheckForm(id){
    document.getElementById(id).style.border = '2px solid #ccc';
}

function sendBuy(){
    filled = true;
    for (i=0; i<5; i++){
        person[i] = document.querySelector(formFields[i]).value;
    }
    if (cookieStat == true){
        setCookie('person', person);
    }
    window.location.href = './exit.html';
}