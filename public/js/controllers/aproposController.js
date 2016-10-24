class aproposController {

    constructor(aproposService) {
        this.aproposService = aproposService;
        this.load();
        $(document).ready(function() {
            $('.collapsible').collapsible({
                accordion: false
            });
            $(document).ready(function() {
                $('select').material_select();
            });

        });
    }
    load() {
        this.aproposService.getAll().then((res) => {
            this.apropos = res.data;
            this.aproposs = res.data[0];
        });
    }
}
