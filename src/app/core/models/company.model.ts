export interface Company {
    id: number,
    name:string,
    address: {
        state: string,
        city: string,
        street: string,
        zipcode: string,
        number: number
    },
    phone: string,
    CEO: {
        name: string,
        phone: string
    }
}