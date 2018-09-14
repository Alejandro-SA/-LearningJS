circle=$(".circle");

$("#check").change(function(){
    if($(this).prop("checked")){
        $(".circle").css({transform: "translateX(120px)"}); ;
        $(".line").css("background-color","red");
    }
    else{
        $(".circle").css({transform: "translateX(0px)"});
        $(".line").css("background-color","black")

    }
console.log(this);


}
)

