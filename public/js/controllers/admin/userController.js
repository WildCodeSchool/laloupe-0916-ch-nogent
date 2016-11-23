function userController (userService) {

        this.userService = userService;

        $("#addjs").click(function() {
            $("#showjs").show();
        });
        $("#savejs").click(function() {
            $("#showjs").hide();
        });

    this.load = () => {
      console.log("load");
        this.userService.getAll().then((res) => {
            this.users = res.data;
        });
    };

    this.create2 = () => {
        this.userService.create(this.user).then(() => {

            this.user = {};
            this.load();
        });
    };

    this.update = (user) => {
      console.log("update");
        this.userService.update(user._id, user).then(() => {
            this.load();
        });
    };

    this.delete = (user) => {
      console.log("delete");
        this.userService.delete(user._id).then(() => {
            this.load();
        });
    };

    this.load();

}
