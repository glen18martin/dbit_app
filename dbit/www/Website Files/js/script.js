

$(document).ready(function() {
	
	/*
	var script = document.createElement('script');
	script.src = "http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js";
	setTimeout(function() {document.head.appendChild(script);}, 1000);
	script.onload = function () {
		
	
		$(document).on("swipeleft",function(){
			goForward();
		});
		
		$(document).on("swiperight",function(){
			goBack();
		});

		
	};
	*/
	
	
	
	$("#container").on("swipeleft",function(){
		goForward();
		
	});
	
	$("#container").on("swiperight",function(){
		goBack();
	});
	
	
	
	var swipeFunc = {
		touches : {
			"touchstart": {"x":-1, "y":-1}, 
			"touchmove" : {"x":-1, "y":-1}, 
			"touchend"  : false,
			"direction" : "undetermined"
		},
		touchHandler: function(event) {
			var touch;
			console.log(event);
						
			if (typeof event !== 'undefined'){	
				//event.preventDefault(); 
				if (typeof event.touches !== 'undefined') {
					touch = event.touches[0];
					switch (event.type) {
						case 'touchstart':
							swipeFunc.touches.touchmove.x = touch.pageX;
						case 'touchmove':
							swipeFunc.touches[event.type].x = touch.pageX;
							
							swipeFunc.touches[event.type].y = touch.pageY;
							break;
						case 'touchend':
							
							
							event.touches[event.type] = true;
							if (swipeFunc.touches.touchstart.x != swipeFunc.touches.touchmove.x) {
								swipeFunc.touches.direction = swipeFunc.touches.touchstart.x < swipeFunc.touches.touchmove.x ? slideBack() : slideForward();
								
							}
						default:
							break;
					}
				}
			}
			return true;
		},
		init: function() {
			document.getElementById("container").addEventListener('touchstart', swipeFunc.touchHandler, false);	
			document.getElementById("container").addEventListener('touchmove', swipeFunc.touchHandler, false);	
			document.getElementById("container").addEventListener('touchend', swipeFunc.touchHandler, false);
		}
	};
	swipeFunc.init();
	

});


function slideBack() {
	$("#container").animate({ scrollLeft: $("#container").scrollLeft() - $("#container").width()*0.9});
	return 1;
}

function slideForward() {
	$("#container").animate({ scrollLeft: $("#container").scrollLeft() + $("#container").width()*0.9});	
	return 1;
}



function goBack() {
	$("#container").animate({ scrollLeft: $("#container").scrollLeft() - $("#container").width()*0.45});
}

function goForward() {
	$("#container").animate({ scrollLeft: $("#container").scrollLeft() + $("#container").width()*0.45});	
}