	
$(document).ready(function(){
    $('.panel p').mouseenter(function(){ 
	    $(this).toggleClass('active');
	    $(this).fadeTo(100, 0.5);
	    $(this).fadeTo(1200, 1);
    });
    
	$('.pull-me').on({
    	mouseenter: function(){
        	$(this).css("text-decoration", "underline");
        	$(this).css("background-color", "underline");         
        	},	
    	mouseleave: function(){
        	$(this).css("text-decoration", "none");        
        	}
	});    
    
    $('.pull-me').mouseenter(function(){ 
        $('.panel').slideDown('slow');
    });
    $('.box').mouseleave(function(){ 
        $('.panel').slideUp('slow');
    });    

	var app2 = angular.module('app2', []);    
    angular.bootstrap(document.getElementById("new_ng_app"), ['app2']);

	$(".anim1").hide();
	$("#anim2").hide();
	$('.anim1').fadeIn(3500);
	$("#anim2").fadeIn(3500);
});

//

var slideShow = function(container) {
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
    }
    
    // Handle going to to the next slide
    var nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.curImage].style.display = "block";
        this.curImage++;
        if (this.curImage >= this.images.length) {
            this.curImage = 0;
        }
        window.setTimeout(nextSlide.bind(this), 5000);
    };    
    nextSlide.call(this);
};


/* $(document).ready(function(){
    $('.main').mouseenter(function(){ 
		$('.icon').height('120%');
    	$scope.Bigger = function() {
        	$scope.icon.height('120%');
    }
    });
});
*/

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

$(document).ready(function() {

});



//slider

       function switchAutoAdvance() {
            imageSlider.switchAuto();
            switchPlayPauseClass();
        }
        function switchPlayPauseClass() {
            var auto = document.getElementById('auto');
            var isAutoPlay = imageSlider.getAuto();
            auto.className = isAutoPlay ? "group2-Pause" : "group2-Play";
            auto.title = isAutoPlay ? "Pause" : "Play";
        }
        switchPlayPauseClass();