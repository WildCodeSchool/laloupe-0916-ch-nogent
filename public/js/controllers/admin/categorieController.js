class admincategorieController {

    constructor(categorieService, $routeParams) {
        this.$routeParams = $routeParams;
        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            plugins: 'advlist autolink link image lists charmap autoresize textcolor'
        };
        this.categorieService = categorieService;
        this.load();

    }
    load() {
      this.categorieService.getAll().then((res) => {
          this.categories = res.data;
      });
    }

    create() {
        this.categorieService.create(this.categorie).then(() => {

            this.categorie = {};
            this.load();
        });
    }

    update(categorie) {
        this.categorieService.update(categorie._id, categorie).then(() => {
            this.load();
        });
    }

    delete(categorie) {
        this.categorieService.delete(categorie._id).then(() => {
            this.load();
        });
    }
}
