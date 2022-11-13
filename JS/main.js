const clickburger = document.getElementById('clickburger') ;
const clickburgerphone = document.getElementById('clickburgerphone') ;
const userprofil = document.querySelector('.userprofil');
const menu_vertical = document.querySelector('.menu_vertical');
const body= document.querySelector('body')
var aburger;
var aburgerphone;


clickburger.onclick=function showhide(){
    if(aburger==1)
        {
        clickburger.classList.add('openmenu')  
        userprofil.classList.add('openmenu')  
        menu_vertical.classList.add('openmenu')  
            return aburger=0;
        }
    else
        {
            clickburger.classList.remove('openmenu')  
            userprofil.classList.remove('openmenu')  
            menu_vertical.classList.remove('openmenu')
            return aburger=1;
        }           
}

clickburgerphone.onclick=function showhide(){
    if(aburgerphone==1)
    {
    clickburgerphone.classList.add('openmenu')  
    userprofil.classList.add('openmenu')  
    menu_vertical.classList.add('openmenu')  
        return aburgerphone=0;
    }
else
    {
        clickburgerphone.classList.remove('openmenu')  
        userprofil.classList.remove('openmenu')  
        menu_vertical.classList.remove('openmenu')
        return aburgerphone=1;
    }         
}  








