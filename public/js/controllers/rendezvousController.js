class rendezvousController {

    constructor(rendezvousService) {
        this.rendezvousService = rendezvousService;
        this.load();
    }
    load() {
        this.rendezvousService.getAll().then((res) => {
            this.btn1s = res.data;
            this.btn1 = this.btn1s[0];
        });
    }
}
