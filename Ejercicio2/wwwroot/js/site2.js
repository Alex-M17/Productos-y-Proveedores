window.onload = function () {
    var localStorageKeyName2 = 'data2';

    loadFromLocalStorage2();

    document.getElementById('btnGuardar').addEventListener('click', function () {
        /*Captura de datos escrito en los inputs*/
        var nom = document.getElementById("NombreTxt").value;
        var dir = document.getElementById("DireccionTxt").value;
        var tel = document.getElementById("TelefonoTxt").value;

        if (nom.length === 0 || dir.length === 0 || tel.length === 0) return;

        var user = {
               nombre: nom,
            direccion: dir,
             telefono: tel
        };

        appendObjectToLocalStorage2(user);
    });

    function appendObjectToLocalStorage2(obj) {
        var users = [], dataInLocalStorage = localStorage.getItem(localStorageKeyName2);

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        users.push(obj);

        localStorage.setItem(localStorageKeyName2, JSON.stringify(users));

        loadFromLocalStorage2();
    }

    function loadFromLocalStorage2() {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName2),
            gridBody = document.getElementById("body2");

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        gridBody.innerHTML = '';


        users.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                td = document.createElement("td"),
                tdNombre = document.createElement("td"),
                tdDir = document.createElement("td"),
                tdTel = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");

            td.innerHTML = i + 1;
            tdNombre.innerHTML = x.nombre;
            tdDir.innerHTML = x.dierccion;
            tdTel.innerHTML = x.telefono;           


            btnRemove.textContent = 'Remove';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function () {
                removeFromLocalStorage(i);
            });

            tdRemove.appendChild(btnRemove);

            tr.appendChild(td);
            tr.appendChild(tdNombre);
            tr.appendChild(tdDir);
            tr.appendChild(tdTel);
            tr.appendChild(tdRemove);

            gridBody.appendChild(tr);
        });
    }

    function removeFromLocalStorage(index) {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName2);

        users = JSON.parse(dataInLocalStorage);

        users.splice(index, 1);

        localStorage.setItem(localStorageKeyName2, JSON.stringify(users));

        loadFromLocalStorage2();
    }
}