
$(document).ready(function () { //pour chargement de la page
   
       $('#button').on("click", function (event) { //ajouter un "listener" à un élément
           event.preventDefault();
           console.log( "click" );
   
           if ($('#Nom').val() == "" || $('#Prenom').val() == "" || $('#Datedenaissance').val() == "" || $('#Adresse').val() == "" || $('#Mail').val() == "") {
   
               $('#myModal').modal("show");
           }
           else {
               $('#myModal').modal("show");
               $(".modal-title").text("Bienvenue "+$("#Nom").val());
               $(".modal-body").html('Vous etes né(e) le ' +$('#Datedenaissance').val()+' <br> Vous habitez <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#Adresse').val()+'&markers='+$('#Adresse').val()+'&size=800x400&zoom=13"/>');
               
               
   
           }
   
       });
})
   
