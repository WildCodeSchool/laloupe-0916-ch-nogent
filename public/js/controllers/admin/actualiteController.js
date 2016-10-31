class actualiteController {

    constructor(actualiteService) {
        this.actualiteService = actualiteService;
        this.load();
        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            plugins: 'advlist autolink link image lists charmap autoresize textcolor'
        };

        $(document).ready(function() {
            $('.collapsible').collapsible({
                accordion: false
            });
            $(document).ready(function() {
                $('select').material_select();
            });

        });

        function uploadFile(file) {
            var url = '/api/picture';
            var xhr = new XMLHttpRequest();
            var fd = new FormData();
            xhr.open("POST", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Every thing ok, file uploaded
                    document.getElementById('chemin').innerHTML = '/uploads/img_' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
                    alert('Votre image a bien été enregistrée.')
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
        this.actualiteService.getAll().then((res) => {
            this.actualite = res.data;
        });
    }
    create() {
        this.actualiteService.create(this.actualite).then(() => {
            this.actualite = {};
            this.load();
        });
    }

    update(actualite) {
        this.actualiteService.update(actualite._id, actualite).then(() => {
            this.load();
        });
    }

    delete(actualite) {
        this.actualiteService.delete(actualite._id).then(() => {
            this.load();
        });
    }

}
