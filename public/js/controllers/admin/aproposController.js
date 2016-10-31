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
            this.aproposs = res.data;
        });
    }
    create() {
        this.aproposService.create(this.apropos).then(() => {
            this.apropos = {};
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
