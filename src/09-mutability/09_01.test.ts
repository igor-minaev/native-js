const increaseAge = (u: UserType) => {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('reference type test', () => {
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference  test', () => {
    const users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        },
    ]
    const admins = users
    admins.push({name: 'Bandyugan', age: 20})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 20})

})

test('value reference  test', () => {
    let usersCount = 100

    let adminsCount = usersCount
    adminsCount = 200

    expect(adminsCount).toBe(200)
    expect(usersCount).toBe(100)

})

test('obj type test', () => {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    //let addr = user.address

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Minsk City'
    expect(user.address.title).toBe('Minsk City')
    expect(user.address).toBe(user2.address)
})

test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    //let addr = user.address

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'


    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    passportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function passportist(letters:any){
    const copy=[...letters].sort()
    console.log(copy)
}