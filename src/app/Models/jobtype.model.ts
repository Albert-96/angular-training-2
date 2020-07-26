export class JobType {
    jobType : string;
    jobDescription: string;

    constructor(jobType = 'Public', jobDescription = 'Public') {
        this.jobType = jobType;
        this.jobDescription = jobDescription;
    }
}