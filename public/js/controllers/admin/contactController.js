class contactController {

    constructor(contactService) {
        this.contactService = contactService;
        this.load();
    }
    load() {
        this.contactService.getAll().then((res) => {
            this.contacts = res.data;
        });
    }

    create() {
        this.contactService.create(this.contact).then(() => {

            this.contact = {};
            this.load();
        });
    }

    update(contact) {
        this.contactService.update(contact._id, contact).then(() => {
            this.load();
        });
    }

    delete(contact) {
        this.contactService.delete(contact._id).then(() => {
            this.load();
        });
    }

}
