const form = document.getElementById('form_numeros')

form.addEventListener('submit', function(e){
    e.preventDefault(e)

    let numeroA = document.querySelector('#firstNumb').value
    let numeroB = document.querySelector('#secondNumb').value

    if(numeroA < numeroB){
        document.querySelector('.certo').style.display = 'block'
        document.querySelector('.errado').style.display = 'none'
    } else{
        document.querySelector('.errado').style.display = 'block'
        document.querySelector('.certo').style.display = 'none'
    }

})

