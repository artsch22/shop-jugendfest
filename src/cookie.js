function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getBasket(cname){
    let arrayCount = 0
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    let decodedArray = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],];
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let codedArray = c.substring(name.length, c.length);
            let cb = codedArray.split(',');
            for (let j = 0; j < cb.length; j++){
                if (cb[j] != ''){
                    decodedArray[j-arrayCount][0] = cb[j];
                    decodedArray[j-arrayCount][1] = cb[j+1];
                    decodedArray[j-arrayCount][2] = cb[j+2];
                    decodedArray[j-arrayCount][3] = cb[j+3];
                    arrayCount = arrayCount+3;
                    j = j+3;
                }
                else{
                    decodedArray[j-arrayCount] = cb[j]
                }
            }
            return decodedArray;
        }
    }
    return "";
}

function setCookie(cname,cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

