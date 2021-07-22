const botonDepartamento = document.getElementById('botonDepartamentos'),
    botonCerrarMenu = document.getElementById('botonMenuCerrar'),
    grid = document.getElementById('grid'),
    contenedorSubcategorias = document.querySelector('#grid .contenedor-subcategorias'),
    contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),


    dispositivoMovil = () => window.innerWidth <= 800;

botonDepartamento.addEventListener('mouseover', () => {
    if(!dispositivoMovil ()){
        grid.classList.add('activo');
    }
    
})

grid.addEventListener('mouseleave', () => {
    if(!dispositivoMovil()){
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu  .categorias a').forEach((e) => {
    e.addEventListener('mouseenter', (e) => {
        if(!dispositivoMovil()){
        document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria == e.target.dataset.categoria){
                categoria.classList.add('activo');
            }
        });
    };
    });
});


// evenlistene para dispositov movil 

document.querySelector('#botonMenuBarras').addEventListener('click', (e) => {
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible'
    }
    else{
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden'
    }
});

botonDepartamento.addEventListener('click', (e) =>{
    e.preventDefault();
    grid.classList.add('activo');
    botonCerrarMenu.classList.add('activo');
})


// boton regresar menu categorias

document.querySelector('#grid .categorias .botonRegresar').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('activo');
    botonCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) =>{
    elemento.addEventListener('click', (e) =>{
        if(dispositivoMovil()){
            contenedorSubcategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');

                }
            })
        }
    })
})

document.querySelectorAll('#grid .contenedor-subcategorias .botonRegresar').forEach((boton) =>{
    boton.addEventListener('click', (e) => {
    e.preventDefault();
    contenedorSubcategorias.classList.remove('activo')
});
});

botonCerrarMenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
        elemento.classList.remove('activo')
    });
    document.querySelector('body').style.overflow = 'visible';
})