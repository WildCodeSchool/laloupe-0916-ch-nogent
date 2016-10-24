class btn1Controller {

    constructor(btn1Service) {
        this.btn1Service = btn1Service;
        this.load();
    }

    load() {
        this.btn1Service.getAll().then((res) => {
            this.btn1s = res.data;
            this.btn1 = this.btn1s[0];
        });
    }
}
