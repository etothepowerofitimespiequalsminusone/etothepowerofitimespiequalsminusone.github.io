

$(document).ready(function(){
       $('#introImg').width(200);
       $('#introImg').mouseover(function()
       {
          $(this).css("cursor","pointer");
          $(this).animate({width: "550px"}, 'fast');
       });
    
    $('#introImg').mouseout(function()
      {   
          $(this).animate({width: "200px"}, 'fast');
       });
   });
function openNav() {
    document.getElementById("sidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
function openAndCloseNav()
{
    
    var nav = document.getElementById("sidenav");
    var main = document.getElementById("main");
     
        if(nav.style.width = "0")
        {
        nav.style.width = "150px";
        main.style.marginLeft = "150px";
        nav.style.display = "block";   
        }
}
function close()
{
    if(document.getElementById("mySidenav").style.width = "150px"){
        document.getElementById("mySidenav").style.display = "none";
        document.getElementById("main").style.marginLeft= "0";
        document.getElementById("mySidenav").style.width = "0";
        return;
    }
}
function showImage(imgName) {
document.getElementById('largeImg').src = imgName;
showLargeImagePanel();
unselectAll();

}

function showLargeImagePanel() {
document.getElementById('largeImgPanel').style.visibility = 'visible';
}
function unselectAll() {
if(document.selection) document.selection.empty();
if(window.getSelection) window.getSelection().removeAllRanges();
}

function hideMe(obj) {
obj.style.visibility = 'hidden';}


function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }

}

$(document).ready(function(){

    $('.linked-read-more').click(function(){
        
        $('#linkedText ul').slideToggle('fast');
        $('#linkedText pre').slideToggle('fast');
        $('#linkedText p:gt(0)').slideToggle('fast',function(){
        var visible= $("#linkedText p:gt(0)").is(":visible");
        $('.linked-read-more').text(visible? "Read Less":"Read More");
        });        
    });   
  });
$(document).ready(function(){

    $('.stack-read-more').click(function(){
        $('#stackText ul').slideToggle('fast');
        $('#stackText pre').slideToggle('fast');
        $('#stackText p:gt(0)').slideToggle('fast',function(){
        var visible= $("#stackText p:gt(0)").is(":visible");
        $('.stack-read-more').text(visible? "Read Less":"Read More");
        });        
    });   
  });
$(document).ready(function(){

    $('.tree-read-more').click(function(){
        
        $('#treeText pre').slideToggle('fast');
        $('#treeText p:gt(0)').slideToggle('fast',function(){
        var visible= $("#treeText p:gt(0)").is(":visible");
        $('.tree-read-more').text(visible? "Read Less":"Read More");
        });        
    });   
  });

$(document).ready(function(){

    $('.queue-read-more').click(function(){
        $('#queueText ol').slideToggle('fast');
        $('#queueText pre').slideToggle('fast');
        $('#queueText p:gt(0)').slideToggle('fast',function(){
        var visible= $("#queueText p:gt(0)").is(":visible");
        $('.queue-read-more').text(visible? "Read Less":"Read More");
        });        
    });   
  });



   
