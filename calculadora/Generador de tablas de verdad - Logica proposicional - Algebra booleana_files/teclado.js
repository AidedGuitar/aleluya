	function clearNums() //CLEAR ENTRY
{current = "";
  Operation = 0; //clear operation
  Memory = "0"; //clear memory
  document.getElementById("display").value = current;
}

// Backspace Function
function back() {
	
var textbox = document.getElementById('display');

var ss = textbox.selectionStart;
var se = textbox.selectionEnd;
var ln  = textbox.value.length;

var textbefore = textbox.value.substring( 0, ss );    //text in front of selected text
var textselected = textbox.value.substring( ss, se ); //selected text
var textafter = textbox.value.substring( se, ln );    //text following selected text

if(ss==se) // if no text is selected
{
textbox.value = textbox.value.substring(0, ss-1 ) + textbox.value.substring(se, ln );
textbox.focus();
textbox.selectionStart = ss-1;
textbox.selectionEnd = ss-1;
}
else // if some text is selected
{
textbox.value = textbefore + textafter ;
textbox.focus();
textbox.selectionStart = ss;
textbox.selectionEnd = ss;
}

/**
 * Using this snippet of code, just add the 'mobile-no-keyboard' class to your input or textarea
 * to prevent the keyboard display on most mobile devices.  You can just add the 'readonly' attribute,
 * but there may be reasons you don't want to on a desktop/laptop machine.
 */
jQuery(document).ready(function($) {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('input.mobile-no-keyboard, textarea.mobile-no-keyboard').attr( 'readonly', 'readonly' );
	}
});
	
	/*
  var value = document.getElementById("display").value;
  document.getElementById("display").value = value.substr(0, value.length - 1);*/
}
	
	//escritura
		function escribir_f1(texto) { 
		c.text(texto); 
		
		var position = c.get(); 
		p=parseInt(position.start);
		c.set(parseInt(position.start)+1);
		
	}
	    function escribir_f2(texto) { 
		c.text(texto); 
		var position = c.get(); 
		p=parseInt(position.start);
		c.set(parseInt(position.start)+2);
	}
		function escribir_f3(texto) { 
		c.text(texto); 
		var position = c.get(); 
		p=parseInt(position.start);
		c.set(parseInt(position.start)+3);
	}
			function escribir_f4(texto) { 
		c.text(texto); 
		var position = c.get(); 
		p=parseInt(position.start);
		c.set(parseInt(position.start)+4);
	}		function escribir_f5(texto) { 
		c.text(texto); 
		var position = c.get(); 
		p=parseInt(position.start);
		c.set(parseInt(position.start)+5);
	}		function escribir_f6(texto) { 
		c.text(texto); 
		var position = c.get(); 
		p=parseInt(position.start);
		c.set(parseInt(position.start)+6);
	}

	//fin funciones de escritura

   //mover el cursor //
		$(function() {
			t_area = $('#display');
			c = t_area.caret();
			
			//mover a la izquierda
			$('#izq').click(function() {
				var position = c.get(); 
				p=parseInt(position.start);
				if(p>0){
				c.set(parseInt(position.start)-1);}
				else {c.set(0);}
			})
			
			//mover a la derecha
			$('#der').click(function() {
				var position = c.get(); 
				p=parseInt(position.start);
				c.set(parseInt(position.start)+1);
			})

		})