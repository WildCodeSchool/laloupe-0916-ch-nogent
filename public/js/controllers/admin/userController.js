class userController {

    constructor(userService) {
        this.userService = userService;
        this.load();

        $("#addjs").click(function() {
            $("#showjs").show();
        });
        $("#savejs").click(function() {
            $("#showjs").hide();
        });
    }
    load() {
      console.log("load");
        this.userService.getAll().then((res) => {
            this.users = res.data;
        });
    }

    create2() {
        this.userService.create(this.user).then(() => {

            this.user = {};
            this.load();
        });
    }

    update(user) {
      console.log("update");
        this.userService.update(user._id, user).then(() => {
            this.load();
        });
    }

    delete(user) {
      console.log("delete");
        this.userService.delete(user._id).then(() => {
            this.load();
        });
    }

}
