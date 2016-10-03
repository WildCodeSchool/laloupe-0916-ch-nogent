class mainController {

    constructor() {

    $(".button-collapse").sideNav();

    $(window).scroll(function() {
        if ($(window).scrollTop() > $('#scrollspy').height()) {
            $('#push').addClass('navbar-fixed');
            $('#topFixed').css({'margin-top': '100px'});
        }
        if ($(window).scrollTop() < $('#scrollspy').height()) {
            $('#push').removeClass('navbar-fixed');
            $('#topFixed').css({'margin-top': '0'});
        }
    });

    $('.slider').slider({full_width: true, height: ($(window).height()/100*80)});

    
    var first = true;
    autoplay1();

    function autoplay1() {
        if (first === true) {
            first = false;
        } else {
            $('.carousel').carousel('next');
        }
        setTimeout(autoplay1, 6000);
    }

    $('#slider2').carousel();
    var second = true;
    autoplay2();

    function autoplay2() {
        if (second === true) {
            second = false;
        } else {
            $('#slider2').carousel('next');
        }
        setTimeout(autoplay2, 3000);
    }

$("a.zoom").click(function()
{
  $(".textevue").css("font-size","130%");
});
$("a.normal").click(function()
{
  $(".textevue").css("font-size","");
});


$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

        /*this.todoService = todoService;
        this.load();*/
    }
/*
    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        })
    }

    create() {
        this.todoService.create(this.todo).then(() => {
            this.todo = '';
            this.load()
        })
    }

    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load()
        })
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load()
        })
    }
*/
}
