function getCookie(cname) {
    var name = cname + "="; //Create the cookie name variable with cookie name concatenate with = sign
    var cArr = window.document.cookie.split(';'); //Create cookie array by split the cookie by ';'
     
    //Loop through the cookies and return the cooki value if it find the cookie name
    for(var i=0; i<cArr.length; i++) {
        var c = cArr[i].trim();
        //If the name is the cookie string at position 0, we found the cookie and return the cookie value
        if (c.indexOf(name) == 0) 
            return c.substring(name.length, c.length);
    }
     
    //If we get to this point, that means the cookie wasn't find in the look, we return an empty string.
    return "";
}
function deleteCookie(cname) {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date 
}
function getUrl(){
    var target = window.location.search.split("?").pop();
    return target;
}
function makeUrl(url){
    window.open('https://fightmeadmin.netlify.com/content.html?' + url);
}

function password(code){
    var xp=document.createElement('div');
    xp.id='ohnoes';
    xp.innerHTML='oh noes';
    xp.style.position='fixed';
    xp.style.opacity='1';
    xp.style.top='0%';
    xp.style.left='0%';
    xp.style.height='100%';
    xp.style.width='100%';
    xp.style.background='blue';
    xp.style.zIndex=999;
    document.body.appendChild(xp);

    //for keeping poeple out
    var test = getCookie("test");
    if(test===code){
        x = code;
        document.getElementById('ohnoes').remove();
    }
    else{
        var str = prompt('password');
        var x = str.toLowerCase();
        if(x===code){
            document.getElementById('ohnoes').remove();
            window.document.cookie="test="+code;
        }
    }
}
