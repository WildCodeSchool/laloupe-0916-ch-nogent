function annuaireController (annuaireService) {

        this.annuaireService = annuaireService;

    this.load = () => {
        this.annuaireService.getAll().then((res) => {
            this.annuaires = res.data;
        });
    };

    this.load();
    
}
