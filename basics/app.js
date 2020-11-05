$(function(){
    console.log('jQuery Works!');
});


$(function(){
    $('#btn1').click(() => {
        console.log('BTN #1 Clicked');        
        if($('#text').html() == '&nbsp;'){
            $('#text').text('Success');
        }else{
            $('#text').html('&nbsp;');
        }
    });
    $('#btn2').click(() => console.log('BTN #2 Clicked'));
});