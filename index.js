
$(".goverbox").hide();

const startingMinutes = 3;
let time = startingMinutes * 60;

const counter = document.getElementById("times");

setInterval(counterfun, 1000);


function counterfun(){
	if(time >= 0){
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = seconds < 10? "0"+seconds : seconds;

	counter.innerHTML = `${minutes} : ${seconds}`;
	time--;
}else{
	$(".goverbox").css("opacity","1").show("fade",100);
    $("#findit").addClass("blur");
	// console.log("gameover");
}
}




$(document).ready(function(){

	$(".watermelon").click(function(){
		$(".watermelon").addClass("things").attr(
			          "value","2");
		$(".wms").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints1").hide();
	});


	$(".cherry").click(function(){
		
		$(".cherry").addClass("things").attr(
			          "value","2");
		
		$(".chs").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints2").hide();
	});


	$(".fly").click(function(){
		
		$(".fly").addClass("things").attr(
			          "value","2");
		
		$(".fls").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints3").hide();
	});


	$(".banana").click(function(){
		
		$(".banana").addClass("things").attr(
			          "value","2");
		
		$(".bns").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints4").hide();
	});


	$(".orange").click(function(){
		
		$(".orange").addClass("things").attr(
			          "value","2");
		
		$(".ogs").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints5").hide();
	});

	$(".flower").click(function(){
		
		$(".flower").addClass("things").attr(
			          "value","2");
		
		$(".fws").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints6").hide();
	});


	$(".fox").click(function(){
		
		$(".fox").addClass("things").attr(
			          "value","2");
		
		$(".fxs").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints7").hide();
	});

	$(".bamboo").click(function(){
		
		$(".bamboo").addClass("things").attr(
			          "value","2");
		
		$(".bbs").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints8").hide();
	});

	$(".caterpillar").click(function(){
		
		$(".caterpillar").addClass("things").attr(
			          "value","2");
		
		$(".cps").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints9").hide();
	});

	$(".grape").click(function(){
		
		$(".grape").addClass("things").attr(
			          "value","2");
		
		$(".gps").css({
			"text-decoration" : "line-through",
			"opacity" : "0.5"
		});
		$(this).removeClass("hintwords");
        $(".hints10").hide();
	});



     // for hints 
    $(".hints1").click(function(){
        $(".watermelon").addClass("hintwords");
        $(".hints1").hide();
    });
    $(".hints2").click(function(){
        $(".cherry").addClass("hintwords");
        $(".hints2").hide();
    });
    $(".hints3").click(function(){
        $(".fly").addClass("hintwords");
        $(".hints3").hide();
    });
    $(".hints4").click(function(){
        $(".banana").addClass("hintwords");
        $(".hints4").hide();
    });
    $(".hints5").click(function(){
        $(".orange").addClass("hintwords");
        $(".hints5").hide();
    });
    $(".hints6").click(function(){
        $(".flower").addClass("hintwords");
        $(".hints6").hide();
    });
    $(".hints7").click(function(){
        $(".fox").addClass("hintwords");
        $(".hints7").hide();
    });
    $(".hints8").click(function(){
        $(".bamboo").addClass("hintwords");
        $(".hints8").hide();
    });
    $(".hints9").click(function(){
        $(".caterpillar").addClass("hintwords");
        $(".hints9").hide();
    });
    $(".hints10").click(function(){
        $(".grape").addClass("hintwords");
        $(".hints10").hide();
    });

    // for hintchanes 

    let chances = 3;

    $(".hints").click(function(){
        if (chances <= 3 && chances >= 0){
            chances--;
            document.getElementById("ec").textContent = chances;
             
            if(chances == 0){
                $(".hints").hide();
            }
        } 
    });


    
    $(".alertbox").hide();

    let clickTimes = 9;

    $(".final").mouseenter(function(){
       
       if(clickTimes <= 10 && clickTimes > 0){
       	
       	clickTimes--;
       	console.log(clickTimes);
       }else if(clickTimes == 0 ){
       	 
       	$(".alertbox").css("opacity","1").show("fade",100);
       	$("#findit").addClass("blur");
        
       };

      
    });

     
    
   	
   });




     


