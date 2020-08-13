var boton = document.getElementById('botoncito');
var menu = document.getElementById('opciones');

boton.addEventListener('mouseover', agregarClase);

function agregarClase()
{
    if (menu.classList.contains('is-active'))
    {
        menu.classList.remove('is-active');
    } else 
    {
        menu.classList.add('is-active');
    }
}