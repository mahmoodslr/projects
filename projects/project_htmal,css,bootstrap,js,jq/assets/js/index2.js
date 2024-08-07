$(document).ready(function () {

    // header
    let x = $(".span_counter").counter({
        autoStart: false, 
        countFrom: 0,          
        countTo: 76,  
        runonce: false,
        duration: 3000, 
    });

    $(".button_offcanvas").click(function(){
        $('.circular-progress').removeClass('animation_header');
        setTimeout(function(){
            $('.circular-progress').addClass('animation_header')
        }, 500);
        x.counter('start');
    });


    // section1
    $(".btn_click_section1").click(function () {
        $(this).addClass("bg-primary");
        $(this).find('a').addClass("text-white");
    });


    // section2_1
    $(".div_box_course").click(function () {
        $(".div_box_items_course").toggleClass("d-none");
    });

    $(".box_item_course").click(function () {
        if ($(this).hasClass('bg_item_course')) {
            $(this).removeClass('bg_item_course');
        } else {
            $('.box_item_course').removeClass('bg_item_course');
            $(this).addClass('bg_item_course');
        }
    });


    // section2_2
    $(".input_price").click(function () {
        $(".input_price").toggleClass("custom-radio_click");
    });

    $(".btn_price").click(function () {
        if ($(this).hasClass('bg-primary text-white')) {
            $(this).removeClass('bg-primary text-white');
        } else {
            $('.btn_price').removeClass('bg-primary text-white');
            $(this).addClass("bg-primary text-white");
        }
    });


    // section2_3
    $(".input_month").click(function () {
        $(".div_month_items").toggleClass("d-none");
        $(".input_month").toggleClass("custom-radio_click");
        if ($(".input_month").hasClass("custom-radio_click")) {
            $(".input_campaign").removeClass("custom-radio_click");
        }
        if (!$(".div_month_items").hasClass("d-none")) {
            $(".div_campaign_items").addClass("d-none");
            $(".div_campaign_items_box").addClass("d-none");
        } else {
            $(".div_month_items").addClass("d-none");
            $(".div_month_items_box").addClass("d-none");
        }
    });
    $(".div_month_items").click(function () {
        $(".div_month_items_box").toggleClass("d-none");
    });
    $(".div_month_item").click(function () {
        $('.div_month_item').removeClass('bg_item_course');
        $(this).toggleClass("bg_item_course");
    });
    $(".div_month_item_1").click(function () {
        $('.p_month').text('ماه بهمن');
    });
    $(".div_month_item_2").click(function () {
        $('.p_month').text('ماه اسفند');
    });

    $(".input_campaign").click(function () {
        $(".div_campaign_items").toggleClass("d-none");
        $(".input_campaign").toggleClass("custom-radio_click");
        if ($(".input_campaign").hasClass("custom-radio_click")) {
            $(".input_month").removeClass("custom-radio_click");
        }
        if (!$(".div_campaign_items").hasClass("d-none")) {
            $(".div_month_items").addClass("d-none");
            $(".div_month_items_box").addClass("d-none");
        } else {
            $(".div_campaign_items").addClass("d-none");
            $(".div_campaign_items_box").addClass("d-none");
        }
    });
    $(".div_campaign_items").click(function () {
        $(".div_campaign_items_box").toggleClass("d-none");
    });
    $(".div_campaign_item").click(function () {
        $('.div_campaign_item').removeClass('bg_item_course');
        $(this).toggleClass("bg_item_course");
    });
    $(".div_campaign_item_1").click(function () {
        $('.p_campaign').text('کمپین تولد 11 سالگی دانشجوبار');
    });
    $(".div_campaign_item_2").click(function () {
        $('.p_campaign').text('کمپین آخر هفته');
    });

    
});

