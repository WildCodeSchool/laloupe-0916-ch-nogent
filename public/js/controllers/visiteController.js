function visiteController (visiteService) {

        this.visiteService = visiteService;

    this.load = () => {
        this.visiteService.getAll().then((res) => {
            this.btn4s = res.data;
            this.btn4 = this.btn4s[0];
        });
    };

    this.load();

}
