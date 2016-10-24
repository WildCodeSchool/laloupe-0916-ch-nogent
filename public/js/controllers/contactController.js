class contactController {

    constructor(contactService) {
        this.contactService = contactService;
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
        this.contactService.getAll().then((res) => {
            this.contacts = res.data;
        });
    }
}
