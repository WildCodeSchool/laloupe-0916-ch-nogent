class adminannuaireController {

    constructor(annuaireService) {
      this.annuaireService = annuaireService;
      this.load();

        }
        load() {
            this.annuaireService.getAll().then((res) => {
                this.annuaires = res.data;
            });
        }

        create() {
            this.annuaireService.create(this.annuaire).then(() => {

                this.annuaire = {};
                this.load();
            });
        }

        update(annuaire) {
            this.annuaireService.update(annuaire._id, annuaire).then(() => {
                this.load();
            });
        }

        delete(annuaire) {
            this.annuaireService.delete(annuaire._id).then(() => {
                this.load();
            });
        }
}
