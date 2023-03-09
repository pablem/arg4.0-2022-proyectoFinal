// 1.- zoom in/out foto de perfil 
document.getElementById('perfil').addEventListener('mouseover', function () {
    document.getElementById('foto-perfil').style.width = "20vw";
    document.getElementById('perfil').style.boxShadow = "10px 10px 10px gray";
});
document.getElementById('perfil').addEventListener('mouseout', function () {
    document.getElementById('perfil').style.boxShadow = "none";
    if (window.innerWidth > 768) {
        document.getElementById('foto-perfil').style.width = "20%";
    } else {
        document.getElementById('foto-perfil').style.width = "none";
    }
});

// 2.- expandir/colapsar detalles
function toggle(e) {
    if(e[0].style.display == 'block') {
        console.log('oka');
        for (let i = 0; i < e.length; i++) {
            e[i].style.display = 'none'
        }
    }
    else {
        for (let i = 0; i < e.length; i++) {
            e[i].style.display = 'block'
        }
    }
}
document.getElementById('btn-detalles1').addEventListener("click", function(){toggle(document.getElementById('detalles1').children)});
document.getElementById('btn-detalles2').addEventListener("click", function(){toggle(document.getElementById('detalles2').children)});

// 3.- cargar datos de RANDOM USER GENERATOR 
async function cargarDatos() {

    try {
        let res = await fetch('https://randomuser.me/api/');
        let persona = await res.json();
        document.getElementById('nombre').innerHTML = persona.results[0].name.title + " " + persona.results[0].name.first + " " + persona.results[0].name.last;
        document.getElementById('mail').innerHTML = " " + persona.results[0].email;
        document.getElementById('lugar').innerHTML = " " + persona.results[0].location.street.name + " " + persona.results[0].location.street.number + ", " + persona.results[0].location.city + ", " + persona.results[0].location.country;
        document.getElementById('celu').innerHTML = persona.results[0].cell;
        document.getElementById("foto").src = persona.results[0].picture.large;
    } catch (error) {
        console.log(error);
    }
}

cargarDatos();




