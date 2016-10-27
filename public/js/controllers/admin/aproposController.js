class aproposController {

    constructor(aproposService) {
        this.aproposService = aproposService;

        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            plugins: 'advlist autolink link image lists charmap autoresize textcolor'
        };
        this.load();
    }
    load() {
        this.aproposService.getAll().then((res) => {
            this.apropos = res.data;
            this.aproposs = res.data[0];
        });
    }
    create() {
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
