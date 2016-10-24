class btn4Controller {

    constructor(btn4Service) {
        this.btn4Service = btn4Service;
        this.load();
    }

    load() {
        this.btn4Service.getAll().then((res) => {
            this.btn4s = res.data;
            this.btn4 = this.btn4s[0];
        });
    }
}
