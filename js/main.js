var iframe, title, text, cont, mIframe, video1, video2;
var currentBanner = 0;
var number = 6;
$(document).ready(function() {
    mIframe = document.querySelector(".screen-2 .mobile-banner");
    video1 =  document.querySelector(".video1");
    video2 =  document.querySelector(".video2");

    window.onload = function(){
        video1.setAttribute("src", "video/in-flame.mp4");
    };
    PopUpHide();
    hideFsVideo();
    fillLibrary();
    init();
    hideArrow(0,".screen-2 .fp-prev");
    window.addEventListener('resize', function () {
        resizeBanner();
        cont.style.height = document.querySelector(".screen-2 .banner").offsetHeight + "px";
    });

    //Дублирование пути для инпута
    $(".file-upload input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").text(filename);
    });

    function init() {
        cont = document.querySelector(".previewContainer");
        iframe = cont.querySelector("iframe");
        slider = new Slider();
    }
    function resizeBanner() {
        var h =  document.body.clientHeight;
        var scale = h * 0.58 / 400;
        if (scale > 1) {
            scale = 1
        }
        mIframe.style.transform =  "translate(-50%, -50%) scale("+ scale + ")";
    }
    resizeBanner();
    function hideFsVideo() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('video').css('display','none');
        }
    }


//Постраничная прокрутка
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        afterLoad:function(anchorLink){
            setTimeout(function() {
                $('.active .init').addClass('is_animated') },
            10);
            if(anchorLink === 'secondPage') {
                video2.setAttribute("src", "video/not-in-flame.mp4");
            }
        }
    });
//<---конец постраничной прокрутки


//Popup формы
    $('.scroll-icon').on( "click", function() {
        $.fn.fullpage.moveSectionDown();
    });
    $('.main-button').on( "click", PopUpShow);
    function PopUpShow(){
        $("#popup").show().css('display','flex');
    }
    function PopUpHide(){
        closeForm();
    }

    $(".popup-pattern .close-area").on("click", PopUpHide);
    $(".popup-pattern .close").on("click", PopUpHide);
    $(".portfolio-preview figure").on("click", showBanner);
    $(".screen-2 .fp-prev").on("click", previewBanner);
    $(".screen-2 .fp-next").on("click", nextBanner);
    $('input.name').on("focus", function () {
        $(this).removeClass("error");
    });
    function closeForm() {
        $("#form").find('input, textarea').each( function(){
            $(this).val('');
        });
        $(".response").css({"display": "none"}).removeClass("sucsess","error");
        $(".popup-pattern").css({"display": "none"});
    }
//<---Конец Popup формы


// Отправка формы
//     $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
//         var form =  $(this);
//             var form_data = $(this).serialize(); //собераем все данные из формы
//             $.ajax({
//                 type: "POST", //Метод отправки
//                 url: "send.php", //путь до php фаила отправителя
//                 data: form_data,
//                 success: function (e) {
//                     var response = $.parseJSON(e);
//                     if(response.error === 2) {
//                         showResponse("error", "Пожалуйста заполните все поля");
//                     }
//                     if(response.error === 0) {
//                         showResponse("sucsess", "Ваше письмо отправлено. Скоро мы с Вами свяжемся");
//                         setTimeout(closeForm, 3000);
//                     }
//                     if (response.error === 1) {
//                         $('input.name').addClass('error');
//                         setTimeout(function () {
//                             $(".response").css({"display": "none"}).removeClass("error");
//                         }, 3000);
//                     }
//                 },
//                 error: function () {
//                     showResponse("error", "Произошла ошибка. Попробуйте еще раз");
//                 }
//             })
//         return false;
//     });
});
//<---Конец отправки формы


function showResponse(selector, text) {
    $obj = $(".response");
    $obj.text(text).addClass(selector).css({"display": "block"});
}

//Слайдер отзывов клиентов.
var Slider = function () {
    this.counter = 0;
    this.currentTranslate = 0;
    this.containerSlides = document.querySelector(".screen-3 .clients");
    this.nextArrow = document.querySelector(".screen-3 .fp-next");
    this.previewArrow = document.querySelector(".screen-3 .fp-prev");
    this.slideWidth = document.querySelector(".screen-3 .slider-container").offsetWidth;
    this.nextSlide = this.nextSlide.bind(this);
    this.previewSlide = this.previewSlide.bind(this);
    this.onResize = this.onResize.bind(this);
    this.nextArrow.addEventListener("click", this.nextSlide);
    this.previewArrow.addEventListener("click", this.previewSlide);
    window.addEventListener('resize', this.onResize);
};
Slider.prototype.nextSlide = function () {
    if(this.counter < 2) {
        this.counter +=1;
        this.currentTranslate -=this.slideWidth;
        console.log(this, this.slideWidth);
        this.containerSlides.style.transform = "translateX(" + this.currentTranslate + "px)";
        this.hideArrow(2, this.nextArrow);
        this.showArrow(1, this.previewArrow);
    }
};
Slider.prototype.previewSlide = function () {
    if (this.counter >0) {
        console.log(this, this.slideWidth);
        this.counter -=1;
        this.currentTranslate +=this.slideWidth;
        this.containerSlides.style.transform = "translateX(" + this.currentTranslate + "px)";
        this.hideArrow(0, this.previewArrow);
        this.showArrow(1, this.nextArrow);
    }
};
Slider.prototype.onResize = function () {
    if (window.innerWidth < 1366){
        this.slideWidth = document.querySelector(".screen-3 .slider-container").offsetWidth;
        this.containerSlides.style.transform = "translateX(-" + this.counter * this.slideWidth + "px)";
        this.currentTranslate = -this.counter * this.slideWidth;
    } else {
        this.containerSlides.style.transform = "translateX(-0px)";
    }

};
Slider.prototype.hideArrow = function (position, element) {
    if (this.counter === position) {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
};
Slider.prototype.showArrow = function (position, element) {
    if (this.counter === position) {
        element.style.display = "block";
    }
};
// <-----Конец слайдер отзывово клиентов


//Библиотека баннеров+показ
function previewBanner() {
    if (currentBanner > 0) {
        currentBanner = currentBanner - 1;
        mIframe.src = library[currentBanner].bannerPath;
    }
    showArrow(4,".screen-2 .fp-next")
    hideArrow(0,".screen-2 .fp-prev");
}
function nextBanner() {
    if (currentBanner < 5) {
        currentBanner = currentBanner + 1
        mIframe.src = library[currentBanner].bannerPath;}
    showArrow(1,".screen-2 .fp-prev")
    hideArrow(5,".screen-2 .fp-next");
}
var library = [];
function fillLibrary() {
    assembleData();
}
function Banner(dataId, bannerPath) {
    this.dataId = dataId;
    this.bannerPath = bannerPath;
    library.push(this);
}
function assembleData() {
    var banner;
    banner = new Banner('1', 'banners/m_cx5/cx5_v2_240x400_white.html');
    banner = new Banner('2', 'banners/Nissan_Pathfinder/mailbox_mail_nissan_PF_240x400.html');
    banner = new Banner('3', 'banners/WaterAki/GarnierWaterAki_240x400.html');
    banner = new Banner('4', 'banners/elantra/elantra_240x400.html');
    banner = new Banner('5', 'banners/google_bclass/240x400_google_bclass.html');
    banner = new Banner('6', 'banners/lego/LEGO_SW_240x400.html');
}
function objectFilter(obj, bannerId) {
    var result = {};
    obj.filter(function (item) {
        if(item.dataId === bannerId){
            result = item;
        }
    });
    return result;
}
function showBanner() {
    var bannerId = this.dataset.dataid;
    document.querySelector(".portfolio-preview .is_active").classList.remove("is_active");
    this.classList.add("is_active");
    var result = objectFilter(library, bannerId);
    iframe.src = result.bannerPath;
}
function hideArrow(position, selector) {
    if (currentBanner === position) {
        $(selector).css({"display": "none"});
    } else {
        $(selector).css({"display": "block"});
    }
}
function showArrow(position, selector) {
    if (currentBanner === position) {
        $(selector).css({"display": "block"});
    }
}
//<---Конец Библиотека баннер+показ
