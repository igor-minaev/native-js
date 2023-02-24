import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('change house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradedUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(upgradedUser)
    expect(user.address).not.toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).toBe(upgradedUser.books)
    expect(upgradedUser.address.house).toBe(99)
    expect(user.address.house).toBe(12)
})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradedUser = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)

})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradedUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')

})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradedUser = removeBook(user, 'js')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[2]).toBe('react')
    expect(user.books[2]).toBe('js')

})

test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const upgradedUser = addCompany(user, {id: 3, title: 'ISoft'})

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.companies).not.toBe(upgradedUser.companies)
    expect(upgradedUser.companies[2]).toEqual({id: 3, title: 'ISoft'})
    expect(upgradedUser.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)


})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const upgradedUser = updateCompanyTitle(user, 1, 'Epam') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.companies).not.toBe(upgradedUser.companies)
    expect(upgradedUser.companies[0].title).toEqual('Epam')
    expect(user.companies[0].title).toBe('Епам')


})

test('update company title', () => {

    const companies = {
        'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}]
    }

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'Epam')

    expect(copy['Dimych']).not.toBe((companies['Dimych']))
    expect(copy['Artem']).toBe((companies['Artem']))
    expect(copy['Dimych'][0].title).toBe('Epam')

})




