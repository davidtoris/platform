modal();
cerrar();
aside();

function modal(){
		$( "#dashboard" ).animate({
	    opacity: 1,
	  }, 900 );
}

function cerrar(){
	$(".btn-modal").click(function(){
		$( "#modal" ).toggle();
	  
	})
}

function aside(){
	$(".btn-aside").click(function(){
		$(".aside").animate({
	    width: 70,
	  }, 300 );
	})

	if ($(".btn-aside").lenght()==1) {
		
	}
}



    	
