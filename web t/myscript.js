var days1 = document.getElementById('days1');
var days2 = document.getElementById('days2');
var days3 = document.getElementById('days3');
var days4 = document.getElementById('days4');
var days5 = document.getElementById('days5');
var days6 = document.getElementById('days6');
var days7 = document.getElementById('days7');
var skrt = document.getElementById('skrt');
var plus = document.getElementById('plus');
var vverh = document.getElementById('vverh');

plus.onclick = function(){
    skrt.style.display = 'block';
    vverh.srtyle.display='block';
}
vverh.onclick=function(){
    skrt.style.display = 'none';
    vverh.srtyle.display='none';
}

days1.onmouseenter = function(){
    days1.style.color='red';
    days2.style.color='rgb(255, 124, 146)';
    days3.style.color='rgb(255, 124, 146)';
    days4.style.color='rgb(255, 124, 146)';
    days5.style.color='rgb(255, 124, 146)';
    days6.style.color='rgb(255, 124, 146)';
    days7.style.color='rgb(255, 124, 146)';
}
days2.onmouseenter = function(){
    days2.style.color='red';
    days1.style.color='rgb(255, 124, 146)';
    days3.style.color='rgb(255, 124, 146)';
    days4.style.color='rgb(255, 124, 146)';
    days5.style.color='rgb(255, 124, 146)';
    days6.style.color='rgb(255, 124, 146)';
    days7.style.color='rgb(255, 124, 146)';
}
days3.onmouseenter = function(){
    days3.style.color='red';
    days2.style.color='rgb(255, 124, 146)';
    days1.style.color='rgb(255, 124, 146)';
    days4.style.color='rgb(255, 124, 146)';
    days5.style.color='rgb(255, 124, 146)';
    days6.style.color='rgb(255, 124, 146)';
    days7.style.color='rgb(255, 124, 146)';
}
days4.onmouseenter = function(){
    days4.style.color='red';
    days2.style.color='rgb(255, 124, 146)';
    days3.style.color='rgb(255, 124, 146)';
    days1.style.color='rgb(255, 124, 146)';
    days5.style.color='rgb(255, 124, 146)';
    days6.style.color='rgb(255, 124, 146)';
    days7.style.color='rgb(255, 124, 146)';
}
days5.onmouseenter = function(){
    days5.style.color='red';
    days2.style.color='rgb(255, 124, 146)';
    days3.style.color='rgb(255, 124, 146)';
    days4.style.color='rgb(255, 124, 146)';
    days1.style.color='rgb(255, 124, 146)';
    days6.style.color='rgb(255, 124, 146)';
    days7.style.color='rgb(255, 124, 146)';
}
days6.onmouseenter = function(){
    days6.style.color='red';
    days2.style.color='rgb(255, 124, 146)';
    days3.style.color='rgb(255, 124, 146)';
    days4.style.color='rgb(255, 124, 146)';
    days5.style.color='rgb(255, 124, 146)';
    days1.style.color='rgb(255, 124, 146)';
    days7.style.color='rgb(255, 124, 146)';
}
days7.onmouseenter = function(){
    days7.style.color='red';
    days2.style.color='rgb(255, 124, 146)';
    days3.style.color='rgb(255, 124, 146)';
    days4.style.color='rgb(255, 124, 146)';
    days5.style.color='rgb(255, 124, 146)';
    days6.style.color='rgb(255, 124, 146)';
    days1.style.color='rgb(255, 124, 146)';
}