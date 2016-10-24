class btn2Controller {

    constructor(btn2Service) {
        this.btn2Service = btn2Service;
        this.load();
    }

    load() {
        this.btn2Service.getAll().then((res) => {
            this.btn2s = res.data;
            this.btn2 = this.btn2s[0];
        });
    }
}
