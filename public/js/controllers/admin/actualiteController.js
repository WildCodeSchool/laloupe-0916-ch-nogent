class actualiteController {

    constructor(actualiteService) {
        this.actualiteService = actualiteService;
        this.load();
        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            plugins: 'advlist autolink link image lists charmap autoresize textcolor'
        };

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
        this.actualiteService.getAll().then((res) => {
            this.actualites = res.data;
        });
    }
    create() {
        this.actualiteService.create(this.actualite).then(() => {
            this.actualite = {};
            this.load();
        });
    }

    update(actualite) {
        this.actualiteService.update(actualite._id, actualite).then(() => {
            this.load();
        });
    }

    delete(actualite) {
        this.actualiteService.delete(actualite._id).then(() => {
            this.load();
        });
    }

}
