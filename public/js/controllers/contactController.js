class contactController {

    constructor(contactService) {
        this.contactService = contactService;
        this.load();
        $(document).ready(function() {
            $('.collapsible').collapsible({
                accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
            $(document).ready(function() {
                $('select').material_select();
            });

        });
    }
    load() {
        this.contactService.getAll().then((res) => {
            this.contacts = res.data;
            console.log(this.contacts);
        });
    }

    sendEmail() {
      this.contactService.sendMail(this.contact);
    }

}
