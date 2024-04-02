$("i.fa-regular").on("click",function(){
     $(this).toggleClass("fa-regular");
     $(this).toggleClass("fa-solid");
})
$("i.fa-heart").click(function(){
    // here code
    $.post("like.php",{
        like:"like"
    },function(status){
        console.log(status);

    })
})
$("i.fa-bookmark").on("click",function(){
    // hereh
})