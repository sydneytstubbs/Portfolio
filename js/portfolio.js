script.js
function openSlideMenu(){
 document.getElementById('side-menu').style.width = '250px';
 document.getElementById('main').style.marginLeft = '250px';	document.getElementById('ham').style.visibility = "hidden";
}

function closeSlideMenu(){
 document.getElementById('side-menu').style.width = '0';
 document.getElementById('ham').style.visibility = "visible";
 document.getElementById('main').style.marginLeft = '-50px'
}
