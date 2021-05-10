$(function(){
    
    $(".lst-bbs li:first-child a").click(function(event){
       
        event.preventDefault()
        $('#modal').css('display', 'flex')
    })

    $(".btn-close").click(function(){
        $('#modal').hide()
    })

    let now = 1
         

 
    setInterval(function(){
        slide()
    }, 3000)


    function slide(){
  

        if(now < 3){

            $('.slide > ul').animate({
                 left: (787 * now * (-1)) + 'px'
             })
             // now = now + 1;
             now++
          } else{
            $('.slide > ul').animate({
                     left : 0
                 })
                 now = 1
             }
            }
})