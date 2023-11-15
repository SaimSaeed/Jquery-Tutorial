// $("h1").css("color","red")
$("h1").addClass("bigTitle padd") // removeClass can also be used to remove class
// has class can also be used to check if class id true or not
$("h2").text("Bye")
$("h2").addClass(" bigTitle padd")
$("h3").html("<em>Please</em>")
$("img").attr("src","img.png");
$("a").attr("href","https://www.yahoo.com");
// Attribute tag can be used to change the attributes of the tags and it can also be used to get classes of a tag.
$("button").css("border","1px solid red")
$("button").css("borderRadius","5px")
$("button").css("backgroundColor","blue")
$("button").css("color","white")


// Event Listners
$("button").click(function(){
    $("h1").css("color","purple");

    
})

$("input").keypress(function(e){
//    console.log(e.key)

$("h1").text(e.key)

    
})

$("h1").on("mouseover",function(){
    $("h1").css("color","pink");

    
})



// Adding or removing  elements

$("h1").before("<button>New</button>") 
$("h1").after("<button>New</button>") 

$("h1").prepend("<button>New</button>") 
$("h1").append("<button>New</button>") 
$("h3").remove() 




// Animations

$("button").on("click",function(){
    // $("h1").hide();
    // .show() will be used to show
    // $("h1").toggle(); 
    // toggle can be used to show and hide
    //  $("h1").fadeOut(); 
    //  $("h1").fadeToggle(); 
    //  $("h1").slideUp(); 
    //  $("h1").slideToggle(); 
    //  $("h1").animate({opacity:0.5}); 
    //  animate can only use numeric values to animate
     $("h1").slideUp().slideDown().animate({opacity:0.5}); 
    //  animations can also be chained up together








    
})