class userController {

    constructor(userService) {
        this.userService = userService;
        this.load();
    }
    load() {
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
        this.userService.update(user._id, user).then(() => {
            this.load();
        });
    }

    delete(user) {
        this.userService.delete(user._id).then(() => {
            this.load();
        });
    }

}
