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
}
