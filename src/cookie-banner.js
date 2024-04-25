var cookieStat = false;
function cookiebanner(){
    let cookies = getCookie("cookies");
    console.log(cookies);
    if (cookies != "" ) {
        cookieStat = (cookies) == "true";
        console.log(cookieStat);
    } 
    else {
        openCookiebanner();
    }
}
function openCookiebanner(){
    var div = document.createElement("div");
    div.id = 'banner';
    var h=document.createElement("h1");
    h.id = "title";
    h.innerText = "Wir verwenden Cookies";
    var p = document.createElement("p");
    p.id = "text";
    p.innerHTML = "Für die funktion des Shops werden Cookies benötigt. <br> Es werden nur Essentielle Cookies verwendet."
    var span = document.createElement("span");
    span.id = "true";
    span.className = "box";
    span.innerText = "Cookies akzeptieren"
    span.setAttribute('onclick', 'cookieInput(this.id);');
    div.appendChild(h);
    div.appendChild(p);
    div.appendChild(span);
    document.body.appendChild(div);
}
function cookieInput(val){
    setCookie("cookies", val);
    element=document.getElementById('banner')
    element.remove();
    cookieStat = (val == 'true');
    if(cookieStat == false){
        document.getElementById('aktivate-cookies').style.display = 'grid';
    }
    console.log(cookieStat);
}