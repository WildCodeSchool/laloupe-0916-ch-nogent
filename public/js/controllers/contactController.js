function contactController (contactService) {

        this.contactService = contactService;
        $(document).ready(function() {
            $('.collapsible').collapsible({
                accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
            $(document).ready(function() {
                $('select').material_select();
            });

        });

    this.load = () => {
        this.contactService.getAll().then((res) => {
            this.contacts = res.data;
            console.log(this.contacts);
        });
    };

    this.sendEmail = () => {
      this.contactService.sendMail(this.contact);
    };

    this.load();

}
