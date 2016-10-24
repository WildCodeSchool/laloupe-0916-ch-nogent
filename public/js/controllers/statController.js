class statController {

    constructor(statService) {
            this.statService = statService;
            this.load();
        }
    load() {
        this.statService.getAll().then((res) => {
            this.stat = res.data;
            this.stats = res.data[0];
        });
    }
    create() {
        if (this.stat.length > 0) this.stat.forEach((v, i) => {
            this.delete(v);
        });
        this.statService.create(this.stats).then(() => {

            this.stats = {};
            this.load();
        });
    }
    update(stat) {
        this.statService.update(stat._id, stat).then(() => {
            this.load();
        });
    }

    delete(stat) {
        this.statService.delete(stat._id).then(() => {
            this.load();
        });
    }
}
