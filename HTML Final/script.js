/*eslint-disable*/
/*code inspired by and following this tutorial for slideshow effect https://css-tricks.com/simple-swipe-with-vanilla-javascript/*/

var numContainers = 6;


/*Initial X value when clicked*/
var initX = null;
/**/
var currentPage = 0;

function changePage(n)
{
    currentPage = n;
    document.body.style.setProperty('--i', currentPage);
}
/*Unifies touchscreen and mouseclick events for tracking motion*/
function unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e
}
/*Event listener functions*/
function lock(e) {
    initX = unify(e).clientX;
}
function move(e) {
    if(initX || initX === 0){
        /*sign is -1 0 or 1 depending if delta X is negative 0 or positive*/
        var deltaX = unify(e).clientX - initX, sign = Math.sign(deltaX);
        
        if((currentPage > 0 || sign < 0) && (currentPage < numContainers - 1 || sign > 0)){
            changePage(currentPage - sign);
        }
        /*resets initial X var to empty*/
        initX = null;
    }
}

document.body.style.setProperty('--n', numContainers);

document.body.addEventListener('mousedown', lock, false);
document.body.addEventListener('touchstart', lock, false);

document.body.addEventListener('mouseup', move, false);
document.body.addEventListener('touchend', move, false);

function init(){
    document.getElementById("main").style.setAttribute("padding-top","100px");
    
}
fitty('#main-bio-p');