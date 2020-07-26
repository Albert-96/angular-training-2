export class ActiveDetail {
    status: string
    country : string;
    active : number;
    Highest : string;
    Lowest: string;

    constructor(status = "",country = "", active = 0, highest = "", lowest = "") {
        this.status = status;
        this.country = country;
        this.active = active;
        this.Highest = highest;
        this.Lowest = lowest;
    }
}