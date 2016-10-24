class statController {

    constructor(statService) {
            this.statService = statService;
            this.load();
        }
    load() {
        this.statService.getAll().then((res) => {
            this.stat = res.data;
            this.stats = res.data[0];
        });
    }
}
