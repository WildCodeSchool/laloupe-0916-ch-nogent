class adminaproposController {

    constructor(aproposService) {
        this.aproposService = aproposService;

        this.tinymceOptions = {
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        };
        this.load();
    }
    load() {
        this.aproposService.getAll().then((res) => {
            this.apropos = res.data;
            this.aproposs = res.data[0];
        });
    }
    create2() {
        if (this.apropos.length > 0) this.apropos.forEach((v, i) => {
            this.delete(v);
        });
        this.aproposService.create(this.aproposs).then(() => {

            this.aproposs = {};
            this.load();
        });
    }

    update(apropos) {
        this.aproposService.update(apropos._id, apropos).then(() => {
            this.load();
        });
    }

    delete(apropos) {
        this.aproposService.delete(apropos._id).then(() => {
            this.load();
        });
    }

}
