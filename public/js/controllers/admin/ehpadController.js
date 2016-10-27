class ehpadController {

    constructor(ehpadService) {
        this.ehpadService = ehpadService;
        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link ",
            plugins: 'advlist autolink link image lists charmap autoresize textcolor'
        };
        this.load();
    }

    load() {
        this.ehpadService.getAll().then((res) => {
            this.btn3s = res.data;
            this.btn3 = this.btn3s[0];
        });
    }

    create() {
        if(this.btn3s.length > 0) this.btn3s.forEach((v,i) => {
          this.delete(v);
        });
        this.ehpadService.create(this.btn3).then(() => {
            this.btn3 = {};
            this.load();

        });
    }

    update(btn3) {
        this.ehpadService.update(btn3._id, btn3).then(() => {
            this.load();
        });
    }

    delete(btn3) {
        this.ehpadService.delete(btn3._id).then(() => {
            this.load();
        });
    }

}
