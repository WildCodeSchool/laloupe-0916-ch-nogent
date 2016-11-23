function statController (statService) {

            this.statService = statService;

    this.load = () => {
        this.statService.getAll().then((res) => {
            this.stat = res.data;
            this.stats = res.data[0];
        });
    };

    this.load();

}
