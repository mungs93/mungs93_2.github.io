	
$(document).ready(function(){
    $('.panel p').mouseenter(function(){ 
	    $(this).toggleClass('active');
	    $(this).fadeTo(100, 0.5);
	    $(this).fadeTo(1200, 1);
    });
});

$(document).ready(function(){
	$('.pull-me').on({
    	mouseenter: function(){
        	$(this).css("text-decoration", "underline");        
        	},	
    	mouseleave: function(){
        	$(this).css("text-decoration", "none");        
        	}
	});
});




	
$(document).ready(function(){
    $('.pull-me').mouseenter(function(){ 
        $('.panel').slideDown('slow');
    });
    $('.box').mouseleave(function(){ 
        $('.panel').slideUp('slow');
    });
});


function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});


