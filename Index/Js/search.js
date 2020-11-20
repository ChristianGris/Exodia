var buscador = $("#table").DataTable();

/* actualización de elementos mientras se escribe  */
$("#input-search").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    /* condicion en caso de que el input este vacio o no */
    if ($("#input-search").val() == ""){
    	/* ocultar */
        $(".content-search").fadeOut(300);
    }else{
    	/* mostrar */
        $(".content-search").fadeIn(300);
    }
})