//Variable de mon html
const btnPhone = document.getElementById('Phone-img');
const textPhone = document.getElementById('Phone-commenter');

// Bool qui est faux quand on ne voit pas le numero
let boolPhone = false; 

/**
 * Permet de garder le numéro afficher en vérifiant boolPhone
 */
const click_btnPhone = ()=>{
    if(!boolPhone){
        textPhone.style.display = 'block';
        boolPhone = !boolPhone;
    }
    else{
        textPhone.style.display= 'none';
        boolPhone = !boolPhone;
    }
}


btnPhone.addEventListener('click',click_btnPhone);
btnPhone.addEventListener('mouseover', (event) => textPhone.style.display = 'block')
btnPhone.addEventListener('mouseout',(event) => {
    if(!boolPhone){textPhone.style.display= 'none'

    }
})