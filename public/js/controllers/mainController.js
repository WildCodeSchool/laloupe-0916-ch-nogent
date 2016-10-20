class mainController {

<<<<<<< HEAD
    constructor(statService) {
        this.statService = statService;
        this.load();
=======
    constructor(btn1Service, btn2Service, btn3Service, btn4Service) {
        //this.todoService = todoService;
        //this.load();

        this.btn1Service = btn1Service;
        this.btn2Service = btn2Service;
        this.btn3Service = btn3Service;
        this.btn4Service = btn4Service;
        this.load();

>>>>>>> f0ba19abb2ff0a6f37788ce0202b0d2556aef7bd
        $(".button-collapse").sideNav();

        $(window).scroll(function() {
            if ($(window).scrollTop() > $('#scrollspy').height()) {
                $('#push').addClass('navbar-fixed');
                $('#topFixed').css({
                    'margin-top': '100px'
                });
            }
            if ($(window).scrollTop() < $('#scrollspy').height()) {
                $('#push').removeClass('navbar-fixed');
                $('#topFixed').css({
                    'margin-top': '0'
                });
            }
        });

        $('.slider').slider({
            full_width: true,
            height: ($(window).height() / 100 * 80)
        });


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

        $("a.zoom").click(function() {
            $(".textevue").css("font-size", "130%");
        });
        $("a.normal").click(function() {
            $(".textevue").css("font-size", "");
        });


        $(document).ready(function() {
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger1').leanModal();
            $('.modal-trigger2').leanModal();
        });

        this.isLoad = false;
        this.isLoad1 = false;
        this.isLoad2 = false;
        this.isLoad3 = false;
        this.toggleConsultation = function() {
            this.isLoad = !this.isLoad;
            this.isLoad1 = false;
            this.isLoad2 = false;
            this.isLoad3 = false;
            if (this.isLoad) {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#scroll1").offset().top
                    }, 500);
                }, 100);
            } else {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500);
                }, 100);
            }
        };

        this.toggleHospitalise = function() {
            this.isLoad1 = !this.isLoad1;
            this.isLoad = false;
            this.isLoad2 = false;
            this.isLoad3 = false;
            if (this.isLoad1) {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#scroll2").offset().top
                    }, 500);
                }, 100);
            } else {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500);
                }, 100);
            }
        };

        this.toggleEhpad = function() {
            this.isLoad2 = !this.isLoad2;
            this.isLoad1 = false;
            this.isLoad = false;
            this.isLoad3 = false;
            if (this.isLoad2) {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#scroll3").offset().top
                    }, 500);
                }, 100);
            } else {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500);
                }, 100);
            }
        };

        this.togglePatient = function() {
            this.isLoad3 = !this.isLoad3;
            this.isLoad = false;
            this.isLoad2 = false;
            this.isLoad1 = false;
            if (this.isLoad3) {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#scroll4").offset().top
                    }, 500);
                }, 100);
            } else {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500);
                }, 100);
            }
        };

    }
<<<<<<< HEAD
    load() {
        this.statService.getAll().then((res) => {
            this.stat = res.data;
            this.stats = res.data[0];
            debugger;
=======

    load() {
        this.btn1Service.getAll().then((res) => {
            this.btn1s = res.data;
            this.btn1 = this.btn1s[0];
        });
        this.btn2Service.getAll().then((res) => {
            this.btn2s = res.data;
            this.btn2 = this.btn2s[0];
        });
        this.btn3Service.getAll().then((res) => {
            this.btn3s = res.data;
            this.btn3 = this.btn3s[0];
        });
        this.btn4Service.getAll().then((res) => {
            this.btn4s = res.data;
            this.btn4 = this.btn4s[0];
        });

    }
    /*
    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
>>>>>>> f0ba19abb2ff0a6f37788ce0202b0d2556aef7bd
        });
    }

    create() {
<<<<<<< HEAD
        if (this.stat.length > 0) this.stat.forEach((v, i) => {
            this.delete(v);
        });
        this.statService.create(this.stats).then(() => {

            this.stats = {};
=======
        this.todoService.create(this.todo).then(() => {

            this.todo = {};
>>>>>>> f0ba19abb2ff0a6f37788ce0202b0d2556aef7bd
            this.load();
        });
    }

<<<<<<< HEAD
    update(stat) {
        this.statService.update(stat._id, stat).then(() => {
=======
    update(todo) {
        this.todoService.update(todo._id, todo).then(() => {
>>>>>>> f0ba19abb2ff0a6f37788ce0202b0d2556aef7bd
            this.load();
        });
    }

<<<<<<< HEAD
    delete(stat) {
        this.statService.delete(stat._id).then(() => {
            this.load();
        });
    }
=======
    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load();
        });
    }*/
>>>>>>> f0ba19abb2ff0a6f37788ce0202b0d2556aef7bd
}
