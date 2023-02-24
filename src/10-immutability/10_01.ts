export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {...u.address, city}
    }

}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }

}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house}
    }

}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: [...u.books, book]
    }

}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }

}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => ({
    ...u,
    books: u.books.filter(b => b !== book)
})

export const addCompany = (u: UserWithLaptopType & WithCompaniesType, newCompany: { id: number, title: string }) => ({
    ...u,
    companies: [...u.companies, newCompany]
})

export const updateCompanyTitle = (u: WithCompaniesType, id: number, newTitle: string) => ({
    ...u,
    companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
})

export const updateCompanyTitle2 = (companies: { [key: string]: CompanyType[] }, userName: string, companyId: number, newTitle: string) => ({
    ...companies, [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
})
