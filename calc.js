function changeMode() {

    let myBody =document.body;

    myBody.classList.toggle('dark-mode')

    let darkLightText = document.getElementById('darkLightMode')

    let pELements = document.getElementsByClassName('p-customColorNumber')

    if(myBody.classList.contains("dark-mode")){

        darkLightText.innerText='Go back to light mode, See the Bright Side'

        document.getElementById('firstDiv').classList.remove('border-dark')
        document.getElementById('firstDiv').classList.add('border-white')

        document.getElementById('secondDiv').classList.remove('border-dark')
        document.getElementById('secondDiv').classList.add('border-white')

        for (var i = 0 ;i < pELements.length; i++) {

            pELements[i].classList.add("pTagElementWhite")

        }

    }
    else{

        darkLightText.innerText='Try the New Dark mode, Illuminate Your Interface'

        document.getElementById('firstDiv').classList.add('border-dark')
        document.getElementById('firstDiv').classList.remove('border-white')

        document.getElementById('secondDiv').classList.add('border-dark')
        document.getElementById('secondDiv').classList.remove('border-white')

        for (var i = 0; i < pELements.length; i++) {

            pELements[i].classList.remove("pTagElementWhite");

        }

    }

    let darkIcon = document.getElementById('darkModeButton')

    if(darkIcon.classList.contains('bi-toggle-off')){

        document.getElementById("darkModeButton").classList.add('bi-toggle-on')

        document.getElementById("darkModeButton").classList.remove('bi-toggle-off')

    }
    else{

        document.getElementById("darkModeButton").classList.add('bi-toggle-off')

        document.getElementById("darkModeButton").classList.remove('bi-toggle-on')

    }
}

function clearAll() {

    document.getElementById('secondInput').innerText=""
    document.getElementById('firstInput').innerText=""

}

function inputCharacter(input) {

    document.getElementById('secondInput').innerText = document.getElementById('secondInput').innerText+input

}

function deleteLastInput() {

    document.getElementById('secondInput').innerText = document.getElementById('secondInput').innerText.slice(0, -1);

}

function calc() {

    document.getElementById('firstInput').innerText = document.getElementById('secondInput').innerText

    document.getElementById('secondInput').innerText = eval(document.getElementById('secondInput').innerText)

}