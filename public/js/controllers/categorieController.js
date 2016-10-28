class categorieController {

    constructor(categorieService, $routeParams) {
        this.$routeParams = $routeParams;

        this.categorieService = categorieService;
        this.load();

    }
    load() {
        this.categorieService.getOne(this.$routeParams.id).then((res) => {
            this.categorie = res.data; //1x actuelle
            this.categorie.photoFull = this.categorie.photo.replace("img_","");
            this.categorieService.getChildrenOf(this.categorie._id).then((res) => {
                this.categoriesEnfant = res.data; //Xx les enfants de actuelle
            });
            if(this.categorie.idparent != "0") {
                this.categorieService.getOne(this.categorie.idparent).then((res) => {
                    this.categorieParent = res.data; //1x le parent de actuelle SI != de 0
                });
            }
        });
    }
}
