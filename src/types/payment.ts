export interface Payment {
    paymentID: string,
    paymentToken: string,
    paymentAmount: string,
    paymentType :string,
    creditCardOwner: string,
    paymentDate: Date,
    last4:string,
    stripeReceipt: string | null,
}
