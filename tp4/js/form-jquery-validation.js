$( document ).ready(function(){ 

$("#submit").on("click",function(event){ 
  event.preventDefault(); 
  console.log( "click" ); 
  
  if ($("#name").val() == ""
            || $("#firstname").val() == ""
            || $("#date").val() == ""
            || $("#adress").val() == ""
            || $("#mail").val() == "") {
            $(".modal-body").html("veuillez remplir tous les champs");
            $('#myModal').modal("show");
        } else {
            
            
            console.log("ok");
            
        }
});

$("#gps").on("click",function(event){ 
  event.preventDefault(); 
  getLocation();
});

});
