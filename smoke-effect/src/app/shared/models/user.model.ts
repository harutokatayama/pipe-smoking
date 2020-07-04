export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    card: number;
    methodOfPayment: number;
    login: boolean;
    favorite: any[];
    address: IAddress[];
}

export interface IAddress {
    pinCode: string;
    country: string;
    building: string;
}
