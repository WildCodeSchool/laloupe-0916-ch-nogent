function annuaireController (annuaireService) {

        this.annuaireService = annuaireService;

        $(document).ready(function() {
            $('.modal-trigger').leanModal();
        });

        $("#addjs").click(function() {
            $("#showjs").show();
        });
        $("#savejs").click(function() {
            $("#showjs").hide();
        });

        $(".button-collapse").sideNav();

        $(document).ready(function() {
            $('input#input_text, textarea#textarea1').characterCounter();
        });

    this.load = () => {
        this.annuaireService.getAll().then((res) => {
            this.annuaires = res.data;
        });
    };

    this.create = () => {
        this.annuaireService.create(this.annuaire).then(() => {

            this.annuaire = {};
            this.load();
        });
    };

    this.update= (annuaire) => {
        this.annuaireService.update(annuaire._id, annuaire).then(() => {
            this.load();
        });
    };

    this.delete = (annuaire) => {
        this.annuaireService.delete(annuaire._id).then(() => {
            this.load();
        });
    };

    this.load();

}
