export interface Group {
    id: string,
    groupName: string,
    groupWebsite: string,
    groupType: string,
    reservation: string,
    insuranceSupplier: string,
    roomCategories: string[],
    dateCreated: Date,
    groupSupplier: string,
    groupCommissionPercentage: number
}