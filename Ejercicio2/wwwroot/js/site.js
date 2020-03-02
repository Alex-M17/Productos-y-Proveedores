window.onload = function () {
    var localStorageKeyName = 'data';

    loadFromLocalStorage();

    document.getElementById('boton-guardar').addEventListener('click', function () {
        /*Captura de datos escrito en los inputs*/
        var nom = document.getElementById("txtNombre").value;
        var desc = document.getElementById("txtDescripcion").value;
        var fVenc = document.getElementById("txtFechaVenc").value;

        if (nom.length === 0 || desc.length === 0 || fVenc.length === 0) return;

        var user = {
            nombre: nom,
            descripcion: desc,
            fechaVenc: fVenc
        };
       
        nom.value = "";
        desc.value = "";
        fVenc.value = "";   

        appendObjectToLocalStorage(user);
    });

    function appendObjectToLocalStorage(obj) {
        var users = [], dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        users.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }

    function loadFromLocalStorage() {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.getElementById("body");

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        gridBody.innerHTML = '';


        users.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                td = document.createElement("td"),
                tdNombre = document.createElement("td"),
                tdDesc = document.createElement("td"),
                tdFecha = document.createElement("td"),
                tdproveedor = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");

            td.innerHTML = i + 1;
            tdNombre.innerHTML = x.nombre;
            tdDesc.innerHTML = x.descripcion;
            tdFecha.innerHTML = x.fechaVenc;
            tdproveedor.innerHTML = i + 1;


            btnRemove.textContent = 'Remove';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function () {
                removeFromLocalStorage(i);
            });

            tdRemove.appendChild(btnRemove);

            tr.appendChild(td);
            tr.appendChild(tdNombre);
            tr.appendChild(tdDesc);
            tr.appendChild(tdFecha);
            tr.appendChild(tdproveedor);
            tr.appendChild(tdRemove);

            gridBody.appendChild(tr);
        });
    }

    function removeFromLocalStorage(index) {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        users = JSON.parse(dataInLocalStorage);

        users.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }
}