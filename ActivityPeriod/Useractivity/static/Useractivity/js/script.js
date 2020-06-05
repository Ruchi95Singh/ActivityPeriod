$(document).ready(function(){
    if($('#result') != null){
        Read();
    }
    $('#create').on('click', function(){
    
       
        $real_name = $('#real_name').val();
        $timezone = $('#timezone').val();
        $st1 = $('#st1').val();
        $st2 = $('#st2').val();
        $st3 = $('#st3').val();
        $et1 = $('#et1').val();
        $et2 = $('#et2').val();
        $et3 = $('#et3').val();
        
     

            $.ajax({
                url: 'create',
                type: 'POST',
                data: {
                    real_name: $real_name,
                    timezone: $timezone,
                    st1: $st1,
                    st2: $st2,
                    st3: $st3,
                    et1: $et1,
                    et2: $et2,
                    et3: $et3,
                    
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    alert('Crested');
                    Read();
                  
                }
            });
        
    });


});

function Read(){
    $.ajax({
		url: 'read',
		type: 'POST',
		async: false,
		data:{
			res: 1,
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
		},
		success: function(response){
			$('#result').html(response);
		}
    });
}