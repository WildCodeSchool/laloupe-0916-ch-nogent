class admincategorieController {

    constructor(categorieService, $routeParams) {
            this.$routeParams = $routeParams;
            this.tinymceOptions = {
                toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                plugins: 'advlist autolink link image lists charmap autoresize textcolor'
            };
            this.categorieService = categorieService;
            this.load();

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
    }
    load() {
      this.categorieService.getAll().then((res) => {
          this.categories = res.data;
      });
    }

    create(categorie) {
      var urlImage = '/uploads/' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
        console.log(urlImage);
        this.categorie.photo = urlImage;

        if (!this.categorie.texte)
            this.categorie.texte = "";

        this.categorieService.create(this.categorie).then(() => {
          this.categorie = {};
          this.load();
        });
    }

    update(categorie) {
        this.categorieService.update(categorie._id, categorie).then(() => {
            this.load();
        });
    }

    delete(categorie) {
        this.categorieService.delete(categorie._id).then(() => {
            this.load();
        });
    }
}
