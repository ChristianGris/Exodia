

/* filtrado de elementos */

$(document).ready(function(){
	

	// Clase "activo" a Primer Objeto //
	$('.cat-inicial .cat[categoria="Todo"]').addClass('activo');
	
	$('.cat').click(function(){

		
		var catObjeto = $(this).attr('categoria');
		console.log(catObjeto);

		// Clase "activo" a Enlace Seleccionado //
		$('.cat').removeClass('activo');
		$(this).addClass('activo');

	// Ocultar Cajas //
	 $('.objeto').hide();

	 // Mostrar Cajas //
	 $('.objeto[categoria="'+catObjeto+'"]').show();

	});

	 	$('.cat[categoria="Todo"]').click(function(){
	 		$('.objeto').show();
	 	});
	 }) ;




/* expandir link en objeto */

$(document).ready(function(){
 
 $('.objeto, .boton, .logo, .video-banner, .boton-mas-inf, .noticia').click(function(){
  window.location = $(this).find("a").attr("href");
 });
 
});







