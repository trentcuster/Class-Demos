/*function dosomething(){
    var divcol = document.getElementsByClassName("divrow");
    for loop for each class
}*/

function dosomething(){
    $(".divrow").css("color","red");
}

//jQuery allows you to do all divrow's without using a for loop. Without
//jQuery it will make all row's an array

  /*  $(document).ready(function () {
        $("#idtest").append("<b>Test</b>");
    });

    $(document).ready(function () {
        $(".classtest").append("<b>Test</b>");
    });

    w3Schools syntax

    */



    function runcode(){
        $("#idtest").html("Test HTML");
        $(".classtest").append("Test HTML");
    }

    function goright()  {
        $("#idtest").animate({
            left: "100",
            top: "250",
            color: "blue"
        },1500, function () {
            // when animation complete do stuff
            $("#idtest").fadeOut(1500, function () {
                //when it's done fading out
                $(".accordian").slideDown(1500);
            });
            $(".accordian").addClass("modal");
        });

    }


    function mytoggle(){
        $(".myalert").toggle();
    }

