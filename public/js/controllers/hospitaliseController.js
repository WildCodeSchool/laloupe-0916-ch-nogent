class hospitaliseController {

    constructor(hospitaliseService) {
        this.hospitaliseService = hospitaliseService;
        this.load();
    }

    load() {
        this.hospitaliseService.getAll().then((res) => {
            this.btn2s = res.data;
            this.btn2 = this.btn2s[0];
        });
    }
}
