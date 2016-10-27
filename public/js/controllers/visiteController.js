class visiteController {

    constructor(visiteService) {
        this.visiteService = visiteService;
        this.load();
    }

    load() {
        this.visiteService.getAll().then((res) => {
            this.btn4s = res.data;
            this.btn4 = this.btn4s[0];
        });
    }
}
