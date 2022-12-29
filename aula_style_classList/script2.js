const validate = {

    function(){
        if(username_input.value != 'melissagouveia'){
            error_text[0].classList.add('visible')
        }
        if(password_input.value != '654321'){
            error_text[1].classList.add('visible')
        }
    }
}


export default validate