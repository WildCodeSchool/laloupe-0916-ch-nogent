class aproposController {

    constructor(aproposService) {
        this.aproposService = aproposService;

        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            plugins: 'advlist fullscreen autolink link image lists charmap autoresize textcolor'
        };
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

    uploadFileChangeImage() {
      this.UploadImg = '/uploads/img_' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
    }

    uploadFileChangeImageUpdate() {
      this.UploadImgUpdate = '/uploads/img_' + document.getElementById('uploadImageUpdate').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
    }

    load() {
        this.aproposService.getAll().then((res) => {
            this.aproposs = res.data;
        });
    }
    create() {
        this.aproposService.create(this.apropos).then(() => {
            this.apropos = {};
            this.load();
        });
    }

    update(apropos) {
        this.aproposService.update(apropos._id, apropos).then(() => {
            this.load();
        });
    }

    delete(apropos) {
        this.aproposService.delete(apropos._id).then(() => {
            this.load();
        });
    }

}
