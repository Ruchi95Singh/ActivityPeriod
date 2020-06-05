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

    $(document).on('click', '.edit', function(){
        $id = $(this).attr('name');
        window.location = "edit/" + $id;

    });
    $(document).on('click', '.print', function(){
        $id = $(this).attr('name');
        window.location = "preview/" + $id;

    });

    $('#update').on('click', function(){
        $vikreta_ka_naam = $('#vikreta_ka_naam').val();
        $vikreta_ka_madhya_naam = $('#vikreta_ka_madhya_naam').val();
        $vikreta_ka_antim_naam = $('#vikreta_ka_antim_naam').val();
        $vikreta_ke_pita_ka_pura_naam = $('#vikreta_ke_pita_ka_pura_naam').val();

     
            $id = $('#member_id').val();
            $.ajax({
                url: 'update/' + $id,
                type: 'POST',
                data: {
                    vikreta_ka_naam: $vikreta_ka_naam,
                    vikreta_ka_madhya_naam: $vikreta_ka_madhya_naam,
                    vikreta_ka_antim_naam: $vikreta_ka_antim_naam,
                    vikreta_ke_pita_ka_pura_naam: $vikreta_ke_pita_ka_pura_naam,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    window.location = '/crud2/';
                    alert('Updated!');
                }
            });
       

    });

    $(document).on('click', '.delete', function(){
        $id = $(this).attr('name');
        $.ajax({
            url: 'delete/' + $id,
            type: 'POST',
            data: {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                Read();
                alert("Deleted!");
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