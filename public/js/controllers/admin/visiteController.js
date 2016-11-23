function visiteController (visiteService) {

        this.visiteService = visiteService;
        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link",
            plugins: 'advlist fullscreen autolink link image lists charmap autoresize textcolor'
        };

    this.load = () => {
        this.visiteService.getAll().then((res) => {
            this.btn4s = res.data;
            this.btn4 = this.btn4s[0];
        });
    };

    this.create = () => {
        if(this.btn4s.length > 0) this.btn4s.forEach((v,i) => {
          this.delete(v);
        });
        this.visiteService.create(this.btn4).then(() => {
            this.btn4 = {};
            this.load();

        });
    };

    this.update = (btn4) => {
        this.visiteService.update(btn4._id, btn4).then(() => {
            this.load();
        });
    };

    this.delete = (btn4) => {
        this.visiteService.delete(btn4._id).then(() => {
            this.load();
        });
    };

    this.load();

}
