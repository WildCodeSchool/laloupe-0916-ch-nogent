class listuserController {

    constructor(userService) {
        this.userService = userService;
        this.load();
    }
    load() {
        this.userService.getAll().then((res) => {
            this.users = res.data;
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
