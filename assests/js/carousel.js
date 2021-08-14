function carousel(){
    $(document).ready(function(){
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:9,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            autoplay: true,
            fluidSpeed: 5000,
            dotsSpeed: false,
            pullDrag: true
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })
      });
}

export default carousel();