class categorieController {

    constructor(categorieService, $routeParams) {
        this.$routeParams = $routeParams;

        this.categorieService = categorieService;
        this.load();

    }
    load() {
        this.categorieService.getOne(this.$routeParams.id).then((res) => {
            this.categorie = res.data;
        });
        this.categorieService.getParent(this.$routeParams.idparent).then((res) => {
            this.categorie = res.data;
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
