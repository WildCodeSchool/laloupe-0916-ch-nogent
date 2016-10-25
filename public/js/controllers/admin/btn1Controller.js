class adminbtn1Controller {

    constructor(btn1Service) {
        this.btn1Service = btn1Service;
        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link ",
            plugins: 'advlist autolink link image lists charmap autoresize textcolor'
        };
        this.load();
    }

    load() {
        this.btn1Service.getAll().then((res) => {
            this.btn1s = res.data;
            this.btn1 = this.btn1s[0];
        });
    }

    create() {
        if(this.btn1s.length > 0) this.btn1s.forEach((v,i) => {
          this.delete(v);
        });
        this.btn1Service.create(this.btn1).then(() => {
            this.btn1 = {};
            this.load();

        });
    }

    update(btn1) {
        this.btn1Service.update(btn1._id, btn1).then(() => {
            this.load();
        });
    }

    delete(btn1) {
        this.btn1Service.delete(btn1._id).then(() => {
            this.load();
        });
    }

}
