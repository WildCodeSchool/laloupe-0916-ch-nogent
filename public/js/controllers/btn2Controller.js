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

    create() {
        if(this.btn2s.length > 0) this.btn2s.forEach((v,i) => {
          this.delete(v);
        });
        this.btn2Service.create(this.btn2).then(() => {
            this.btn2 = {};
            this.load();

        });
    }

    update(btn2) {
        this.btn2Service.update(btn2._id, btn2).then(() => {
            this.load();
        });
    }

    delete(btn2) {
        this.btn2Service.delete(btn2._id).then(() => {
            this.load();
        });
    }

}
