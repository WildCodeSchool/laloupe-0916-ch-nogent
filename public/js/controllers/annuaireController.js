class annuaireController {

    constructor(annuaireService) {
        this.annuaireService = annuaireService;
        this.load();

    }
    load() {
        this.annuaireService.getAll().then((res) => {
            this.annuaires = res.data;
        });
    }
}
