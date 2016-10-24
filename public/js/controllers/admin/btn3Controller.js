class adminbtn3Controller {

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

    create() {
        if(this.btn3s.length > 0) this.btn3s.forEach((v,i) => {
          this.delete(v);
        });
        this.btn3Service.create(this.btn3).then(() => {
            this.btn3 = {};
            this.load();

        });
    }

    update(btn3) {
        this.btn3Service.update(btn3._id, btn3).then(() => {
            this.load();
        });
    }

    delete(btn3) {
        this.btn3Service.delete(btn3._id).then(() => {
            this.load();
        });
    }

}
