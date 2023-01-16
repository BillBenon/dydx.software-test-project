export interface Hotel {
    id: string,
    hotelName: string,
    hotelAddress :string,
    hotelPhone: string,
    hotelImage: string,
    hotelFrontDeskPhone: string,
    hotelFrontDeskEmail: string,
    hotelDescription: string,
    hotelPositives: string,
    hotelCodes : {
        hbsi:string,
        bedsonline: string,
        vax: string
    },
    preferredSuppler:string,
    supplierCommissionList: string
}
