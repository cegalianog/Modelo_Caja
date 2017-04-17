/**
 * Created by Galiano on 15/04/2017.
 */


    twttr.widgets.createTimeline(
        {
            sourceType: 'profile',
            screenName: 'UniversidadUNAD'
        },
        document.getElementById('twitter'),
        {
            width: '550',
            height: '400',
            related: 'twitterdev,twitterapi'
        }).then(function (el) {

    });

$(document).on("ready", function () {
    $('.carousel').carousel({
        interval: 4000
    });



    var tab = window.location.hash.slice(1,6);
    console.log(tab);
    if(tab == "lect1" || tab == "lect2" || tab == "lect3" || tab == "lect4" || tab == "lect5"){

        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    }



    if(tab == "mult1"){

        $('a[href="#Modelo"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    }
    if(tab == "mult2"){
        $('a[href="#Float_Position_Oweflow"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    }

    if(tab == "acti1"){
        $('a[href="#Modelo"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    }
    if(tab == "acti2"){
        $('a[href="#Margin"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    }
    if(tab == "acti3"){
        $('a[href="#Padding"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    }



    $("[href='Multimedia.html#mult1']").on("click", function () {
        $('a[href="#Modelo"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    });
    $("[href='Multimedia.html#mult2']").on("click", function () {
        $('a[href="#Float_Position_Oweflow"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    });




    $("[href='Actividades.html#acti1']").on("click", function () {
        $('a[href="#Modelo"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    });
    $("[href='Actividades.html#acti2']").on("click", function () {
        $('a[href="#Margin"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    });
    $("[href='Actividades.html#acti3']").on("click", function () {
        $('a[href="#Padding"]').tab('show');
        var posicion = $(".menu").offset().top;
        $("html, body").stop(false,false).animate({
            scrollTop: posicion - 80
        }, 1000);
    });




    $( "#slider_margin" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 20,
        slide: function( event, ui ) {
            $( "#margin" ).val( "{ margin: " + ui.value + "px };");
            $(".cajas").css("margin", ui.value);
        }
    });

    $( "#margin" ).val( "{ margin: " + $( "#slider_margin" ).slider( "value" ) + "px };" );




    $( "#slider_padding" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 20,
        slide: function( event, ui ) {
            $( "#padding" ).val( "{ padding: " + ui.value + "px };");
            $(".cajas").css("padding", ui.value);
        }
    });

    $( "#padding" ).val( "{ padding: " + $( "#slider_padding" ).slider( "value" ) + "px };" );


    $( "#slider_border" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 20,
        slide: function( event, ui ) {
            $( "#border" ).val( "{ border-width: " + ui.value + "px };");
            $(".cajas").css("border-width", ui.value);
        }
    });

    $( "#border" ).val( "{ border-width: " + $( "#slider_border" ).slider( "value" ) + "px };" );




    //////////////////////////////////////////////////




    $("#cambio").text("float: " + "left");
    $(".tachar").css("textDecoration", "line-through");

    var propiedad = "float";

    $("[name = 'position']").change(function () {
        var valor = $(this).val();
        switch (valor){
            case "left":
                propiedad = "float";
                $(".ralativo").css("position", "relative");
                $(".tachar").css("textDecoration", "line-through");
                $("#caja_flotante").css("float", "left");
                break;
            case "right":
                propiedad = "float";
                $(".ralativo").css("position", "relative");
                $(".tachar").css("textDecoration", "line-through");
                $("#caja_flotante").css("float", "right");
                break;
            case "none":
                propiedad = "float";
                $(".ralativo").css("position", "relative");
                $(".tachar").css("textDecoration", "line-through");
                $("#caja_flotante").css("float", "none");
                break;
            case "inherit":
                propiedad = "float";
                $(".ralativo").css("position", "relative");
                $(".tachar").css("textDecoration", "line-through");
                $("#caja_flotante").css("float", "inherit");
                break;
            case "static":
                propiedad = "position";
                $(".tachar").css("textDecoration", "none");
                $(".ralativo").css("position", "relative");
                $("#caja_flotante").css("position", "static");
                $("#caja_flotante").css("float", "none");
                break;
            case "absolute":
                propiedad = "position";
                $(".tachar").css("textDecoration", "none");
                $(".ralativo").css("position", "initial");
                $("#caja_flotante").css("position", "absolute");
                $("#caja_flotante").css("float", "none");
                break;
            case "fixed":
                propiedad = "position";
                $(".tachar").css("textDecoration", "none");
                $("#caja_flotante").css("position", "fixed");
                $("#caja_flotante").css("float", "none");
                break;
            case "relative":
                propiedad = "position";
                $(".tachar").css("textDecoration", "none");
                $(".ralativo").css("position", "relative");
                $("#caja_flotante").css("position", "relative");
                $("#caja_flotante").css("float", "none");
                break;

        }
        $("#cambio").text(propiedad + ": " + valor);

    });



    /////////////////////////////////////


    $("[name='pregunta']").change(function () {
        var respuesta = $(this).val();
        if(respuesta == "1"){

            $(this).parent().find(".chulo").show().addClass("glyphicon glyphicon-ok");
            $(this).parents(".item").find("._0").attr('disabled', 'disabled');
        }else {

            $(this).parent().find(".chulo").show().addClass("glyphicon glyphicon-remove mal");
            $(this).parents(".item").find("._1").attr('disabled', 'disabled');
        }


    });










});



