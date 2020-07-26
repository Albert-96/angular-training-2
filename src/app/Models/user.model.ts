import { JobType } from './jobtype.model';

export class User {
    username : string;
    password : string;
    jobType : JobType;
    jobDescription : string;

    constructor(username = "", password = "", jobType = "", jobDescription = "") {
        this.username = username;
        this.password = password;
        this.jobType = new JobType();

    }
}