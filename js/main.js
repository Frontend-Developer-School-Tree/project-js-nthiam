/** 1° cosa da fare
 * dichiaro variabili e costanti
 */
//SELEZIONO:
//bottone apertura modal
const btnOpenModal = document.querySelector('#btnModal')
//bottone chiusura modal
const btnCloseModal = document.querySelector('#btnClose')
//bottone aggiungi
const btnSubmit = document.getElementById('buttonSubmit')
//bottone applica modifiche
const btnSave = document.getElementById('buttonModify')

//container della modal
const modalCourse = document.getElementById('modalContainer')
//il form
const form = document.querySelector('#modalCourse')
//h2 vuoto
const h2 = document.getElementById('textContent')
//seleziono le input presenti nel mio form 
//N.B uso document e non la variabile formModal
const titoloValue = document.getElementById('titoloCorso')
const temaValue = document.getElementById('temaCorso')
const livelloValue = document.getElementById('livelloCorso')
const imgValue = document.getElementById('imgCorso')

//creo lista vuota che userò per mettere i valori
const courseArray = []
//seleziona lista presente
const ulLista = document.getElementById('.listaCorsi')
// seleziono lo span per inserire nel futuro il numero di elementi presenti nell'array
const totCorsi= document.getElementById('totCorsi');

const getNumberOfCourse = () => {
    const num = courseArray.length;
    return totCorsi.textContent = num // questo valore è un valore STRINGA
}

//funzione di apertura modal con condizione
function handleOpenModal (e) {
    modalCourse.classList.add('modalVisible')
    if (modalCourse.firstElementChild.id) 
    {
        btnSubmit.hidden = true
        btnSubmit.removeAttribute('type')
        btnSave.setAttribute('type', 'submit')
        btnSave.hidden = false
        h2.textContent = 'Modifica Corso'
    }
    else 
    {
        h2.textContent = 'Aggiungi Corso'
        document.getElementById('idCourse').textContent = ''
        btnSubmit.hidden = false
        btnSubmit.setAttribute('type', 'submit')
        btnSave.hidden = true
        btnSave.removeAttribute('type')
    }
}
//funzine per chiudere il modal
const handleClose = (e) => {
    modalCourse.classList.remove('modalVisible')
    handleClearField();
    modalCourse.firstElementChild.removeAttribute('id')
}
// posso chiudere la modal cliccando lo sfondo nero
const handleCloseFromBack = (e) => {
    // dato che il mio evento si scatena sul contenitore Modal devo selezionare il target specifico
    if(e.target.classList.contains('modalVisible')){
        handleClose() // invoco la chiusura
    }
}
//funzione per svuotare i campi
const handleClearField = () => {
    titoloValue.value = "";
    temaValue.value = "";
    livelloValue.value = "";
    imgValue.value = "";
}
//aggiunta di un corso
const handleAddCourse = (e) => {
    e.preventDefault();
    console.log(e);
    
}


//carica tutti gli eventi
const load = () => {
    btnOpenModal.addEventListener('click',handleOpenModal)
    btnCloseModal.addEventListener('click', handleClose)
    modalCourse.addEventListener('click', handleCloseFromBack)
    //formModal.addEventListener('submit', handleAddCourse)
    //formModal.addEventListener('submit', handleApplyChanges)
    //ulLista.addEventListener('click', removeCourse)
    //ulLista.addEventListener('click', handleEditModal)
    getNumberOfCourse();
}

load();
