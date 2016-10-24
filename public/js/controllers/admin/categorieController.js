class admincategorieController {

    constructor(categorieService, $routeParams) {
        this.$routeParams = $routeParams;

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
