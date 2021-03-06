function rendezvousController (rendezvousService) {

        this.rendezvousService = rendezvousService;
        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link",
            plugins: 'advlist fullscreen autolink link image lists charmap autoresize textcolor'
        };

    this.load = () => {
        this.rendezvousService.getAll().then((res) => {
            this.btn1s = res.data;
            this.btn1 = this.btn1s[0];
        });
    };

    this.create = () => {
        if(this.btn1s.length > 0) this.btn1s.forEach((v,i) => {
          this.delete(v);
        });
        this.rendezvousService.create(this.btn1).then(() => {
            this.btn1 = {};
            this.load();

        });
    };

    this.update = (btn1) => {
        this.rendezvousService.update(btn1._id, btn1).then(() => {
            this.load();
        });
    };

    this.delete = (btn1) => {
        this.rendezvousService.delete(btn1._id).then(() => {
            this.load();
        });
    };

    this.load();

}
