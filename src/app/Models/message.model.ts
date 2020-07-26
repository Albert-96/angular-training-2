export class Message {
    title : string;
    message : string;
    status : string;

    constructor(title = "", message = "", status = "") {
        this.title = title;
        this.message = message;
        this.status = status;
    }
}