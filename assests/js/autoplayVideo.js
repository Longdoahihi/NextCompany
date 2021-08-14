function autoplayVideo(){
    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);

    var eleClick = $('.videoWork__video');
    var eleVideo = $('.videoWork__videoup');
    var eleBody = $('body');
    var linkVideo = $('iframe').src;
    eleClick.addEventListener("click",()=>{
        $('iframe').src += '?autoplay=1';
        eleVideo.classList.toggle('hidden');
        eleBody.style.overflowY = 'hidden'; 
    })
    eleVideo.addEventListener("click",()=>{
        eleVideo.classList.toggle('hidden');
        $('iframe').src = linkVideo;
        eleBody.style.overflowY = 'auto'; 
    })
}

export default autoplayVideo();