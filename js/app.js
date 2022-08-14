window.onload = ()=>{
    inputFocus = () => {
        formulario.tarea.focus();
    }
    limpiarInput = () => {
        formulario.tarea.value = "";
    }
    agregarTarea = (event) => {
        event.preventDefault();
        document.getElementById("tituloLista").classList.remove("d-none");
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "align-items-center");
        listItem.innerHTML = formulario.tarea.value;
        let trash = document.createElement("a");
        trash.classList.add("bi", "bi-trash", "ms-auto");
        trash.setAttribute("href", "#")
        trash.addEventListener("click", function (){borrarTarea(this);});
        listItem.appendChild(trash);
        lista.appendChild(listItem);
        limpiarInput();
        inputFocus();
    }
    borrarTarea = (listItem) => {
        listItem.parentElement.remove();
        inputFocus();
        
    }
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", agregarTarea);
    let lista = document.getElementById("lista");
    inputFocus();
}