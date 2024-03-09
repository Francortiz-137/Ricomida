$(document).ready(function() {
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#enviarCorreo').click(()=>{
        alert('El correo fue enviado correctamente...');
    })
    
    $('h4').on('dblclick', function() {
        $(this).css('color', 'red');
    });

    $('.card-title').on('click',function(){
        console.log('xd');
        $(this).next('.card-text').toggle();
    });
});