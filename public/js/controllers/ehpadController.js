class ehpadController {

    constructor(ehpadService) {
        this.ehpadService = ehpadService;
        this.load();
    }

    load() {
        this.ehpadService.getAll().then((res) => {
            this.btn3s = res.data;
            this.btn3 = this.btn3s[0];
        });
    }
}
