export class StateDetail {
    state : string;
    stateCode : string;
    active: number = 0;
    reported: number = 0;
    death: number = 0;
    district : DistrictDetail[] = [];
}

export class DistrictDetail {
    district: string;
    active: number;
    reported: number;
    death: number;
}