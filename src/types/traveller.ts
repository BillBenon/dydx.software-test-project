export interface Traveller {
    id:string,
    firstName: string,
    middleName: string,
    lastName: string,
    phone: string,
    email: string,
    birthdate: Date,
    age: number,
    amountPaid: number | null,
    purchasedInsurance:string,
    gender: string,
    status:string
}