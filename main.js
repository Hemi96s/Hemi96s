const hamburger=document.querySelector('.hamburger');
const naveMenu=document.querySelector('.navBarPhone');


// 漢堡
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('is-active')
    naveMenu.classList.toggle('is-active')
  
}

)



// 視窗滾動
window.onscroll=function(){
    cancelHamburger()
};
// 取消漢堡視窗判斷

function cancelHamburger(){
    if(document.documentElement.scrollTop > 1){
        hamburger.classList.remove('is-active')
        naveMenu.classList.remove('is-active')
       
    }
}