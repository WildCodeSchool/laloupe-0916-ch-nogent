class navbarController {

    constructor(categorieService) {
        this.categorieService = categorieService;
        this.loadCategories();

        $(window).scroll(function() {
            if ($(window).scrollTop() > $('#scrollspy').height()) {
                $('#push').addClass('navbar-fixed');
                  $('#urgenceHide').addClass('ng-hide');
                  $('.group-btn').show();
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
        this.isToggled = false;
        this.toggleEmergencies = () => {
            this.isToggled = !this.isToggled;
            console.log(this.isToggled);
            if (this.isToggled === true) {
              $('.group-btn').hide();
            } else {
              $('.group-btn').show();
            }
        };
    }

    loadCategories() {
        this.categorieService.getChildrenOf('0').then((res) => {
            this.categories = res.data;
            setTimeout(function() {
                $(".dropdown-button").dropdown();
            }, 0);
        });
    }

}
