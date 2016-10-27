class mainController {

    constructor(rendezvousService, hospitaliseService, ehpadService, visiteService, statService) {
        this.rendezvousService = rendezvousService;
        this.hospitaliseService = hospitaliseService;
        this.ehpadService = ehpadService;
        this.visiteService = visiteService;
            this.statService = statService;
        this.load();

        $(".button-collapse").sideNav();

        $('.slider').slider({
            full_width: true,
            // height: ($(window).height() / 100 * 80)
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
    load() {
        this.statService.getAll().then((res) => {
            this.stat = res.data;
            this.stats = res.data[0];
        });
        this.rendezvousService.getAll().then((res) => {
            this.btn1s = res.data;
            this.btn1 = this.btn1s[0];
        });
        this.hospitaliseService.getAll().then((res) => {
            this.btn2s = res.data;
            this.btn2 = this.btn2s[0];
        });
        this.ehpadService.getAll().then((res) => {
            this.btn3s = res.data;
            this.btn3 = this.btn3s[0];
        });
        this.visiteService.getAll().then((res) => {
            this.btn4s = res.data;
            this.btn4 = this.btn4s[0];
        });

    }
    create() {
        if (this.stat.length > 0) this.stat.forEach((v, i) => {
            this.delete(v);
        });
        this.statService.create(this.stats).then(() => {

            this.stats = {};
            this.load();
        });
    }
    update(stat) {
        this.statService.update(stat._id, stat).then(() => {
            this.load();
        });
    }

    delete(stat) {
        this.statService.delete(stat._id).then(() => {
            this.load();
        });
    }
}
