export class CountryDetail {
    country : string;
    active : number;
    reported : number;
    death: number;

    constructor(country = "", active = 0, reported = 0, death = 0) {
        this.country = country;
        this.active = active;
        this.reported = reported;
        this.death = death;
    }
}