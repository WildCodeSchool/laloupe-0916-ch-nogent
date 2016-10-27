class marcheController {

    constructor(marcheService) {
        this.marcheService = marcheService;

        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            plugins: 'advlist autolink link image lists charmap autoresize textcolor'
        };
        this.load();
    }
    load() {
        this.marcheService.getAll().then((res) => {
            this.marche = res.data;
            this.marches = res.data[0];
        });
    }
    create2() {
        if (this.marche.length > 0) this.marche.forEach((v, i) => {
            this.delete(v);
        });
        this.marcheService.create(this.marches).then(() => {

            this.marches = {};
            this.load();
        });
    }

    update(marche) {
        this.marcheService.update(marche._id, marche).then(() => {
            this.load();
        });
    }

    delete(marche) {
        this.marcheService.delete(marche._id).then(() => {
            this.load();
        });
    }

}
