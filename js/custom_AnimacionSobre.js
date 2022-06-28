
      function animacionSobre() {
        var element = document.getElementById("sobre1");
        element.classList.add("moved");
        var element2 = document.getElementById("sobre2");
        element2.classList.add("moved2");
        boton.click();
        setTimeout(cerrarModal, 2000)
      }

      function cerrarModal() {
        $("#myModal").modal('hide');//ocultamos el modal
        $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        $('.modal-backdrop').remove();//eliminamos el backdrop del modal
      }

      $(document).ready(function(){
        $("#myModal").modal('show');
      });