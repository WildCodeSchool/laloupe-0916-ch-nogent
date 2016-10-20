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

    create() {
        if(this.btn4s.length > 0) this.btn4s.forEach((v,i) => {
          this.delete(v);
        });
        this.btn4Service.create(this.btn4).then(() => {
            this.btn4 = {};
            this.load();

        });
    }

    update(btn4) {
        this.btn4Service.update(btn4._id, btn4).then(() => {
            this.load();
        });
    }

    delete(btn4) {
        this.btn4Service.delete(btn4._id).then(() => {
            this.load();
        });
    }

}
