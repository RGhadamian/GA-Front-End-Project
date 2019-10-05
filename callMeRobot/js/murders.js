class Murders {
    constructor (robot) {
        this.roboDisplay = $('#roboDisplay');       
        this.nycBorough = "Select NYC Borough";
        this.borough = "";
        this.nycMurders = [];
        this.numOfMurders = 10;
        this.robot = robot;

        $('.policeScanner').click(() => this.getRecentMurders());
    }

    async getRecentMurders() {
        console.log("hi");
        const limit = $('#policeInput').val();
        this.borough = event.target.id;
        console.log(event.target.id)

        if (limit && (limit < 11 || limit > 0)) {
            this.numOfMurders = limit;
        }
        $('#listOfMurders').children().remove();

        const murders = await this.getMurders(this.borough);
        this.nycMurders = murders;
        this.printMurders(this.numOfMurders);
    }

    async getMurders(borough) {
        const murderPromise = await $.ajax({ url: `https://data.cityofnewyork.us/resource/5ucz-vwe8.json?boro=${borough}&statistical_murder_flag=true` });
        console.log('murderPromise:', murderPromise);

        return murderPromise;
    }

    printMurders(num) {
        for (let i = 0; i < num; i++) {

            //console.log(this.nycMurders[i]);
            $('#listOfMurders').append(`<li>${this.nycMurders[i].incident_key}</li>`);
        }

    }

}