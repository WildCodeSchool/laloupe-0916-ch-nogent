class btn3Controller {

    constructor(btn3Service) {
        this.btn3Service = btn3Service;
        this.load();
    }

    load() {
        this.btn3Service.getAll().then((res) => {
            this.btn3s = res.data;
            this.btn3 = this.btn3s[0];
        });
    }
}
