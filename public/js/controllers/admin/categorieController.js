function categorieController(categorieService, $routeParams) {

    this.$routeParams = $routeParams;
    this.tinymceOptions = {
        toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        plugins: 'advlist fullscreen autolink link image lists charmap autoresize textcolor'
    };
    this.categorie = {
        "idparent": ""
    };
    this.categorieService = categorieService;

    function uploadFile(file) {
        var url = '/api/picture';
        var xhr = new XMLHttpRequest();
        var fd = new FormData();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Every thing ok, file uploaded
                console.log(xhr.responseText); // handle response.
            }
        };
        fd.append("upload_file", file);
        xhr.send(fd);
    }

    var uploadfiles = document.querySelector('#uploadImage');
    uploadfiles.addEventListener('change', function() {
        var files = this.files;
        for (var i = 0; i < files.length; i++) {
            uploadFile(this.files[i]); // call the function to upload the file
        }
    }, false);

    this.showService = () => {
        $(".serviceUpdate").hide();
        var select = document.getElementById("serviceSelect");
        var choice = select.selectedIndex;
        var valeur = select.options[choice].value;
        console.log(valeur);
        $("#" + valeur).show();
    };

    function uploadFileChangeImage() {
        this.UploadImg = '/uploads/img_' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
        console.log(document.getElementById('uploadImage').value);
    }

    function uploadFileChangeImageUpdate(index) {
        this.UploadImgUpdate = '/uploads/img_' + document.getElementById('uploadImageUpdate' + index).value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
        console.log(this.UploadImgUpdate);
    }

    this.load = () => {
        this.categorieService.getAll().then((res) => {
            this.categories = res.data;
            var ServiceSelect = document.getElementById('serviceSelect').value;
            console.log(document.getElementById('serviceSelect').value);
        });
    };

    this.create = (categorie) => {
        var urlImage = '/uploads/img_' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
        this.categorie.photo = urlImage;
        console.log(categorie.position);
        this.categorieService.create(this.categorie).then(() => {
            this.categorie = {
                "idparent": ""
            };
            this.load();
            $("#ajout-0").hide();
        });
    };

    this.update = (categorie) => {
        this.categorieService.update(categorie._id, categorie).then(() => {
            this.load();
        });
    };

    this.delete = (categorie) => {
        this.categorieService.delete(categorie._id).then(() => {
            this.load();
        });
    };

    this.load();

}
