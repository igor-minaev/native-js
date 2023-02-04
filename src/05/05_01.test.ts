import {createGreetingMessage, ManType} from "./05_01";

let people: Array<ManType>

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]
})

test('should get array of greeting messages', () => {
    const mesages = createGreetingMessage(people)

    expect(mesages.length).toBe(3)
    expect(mesages[0]).toBe('Hello Andrew. Welcome to IT-Incubator')
    expect(mesages[1]).toBe('Hello Alexander. Welcome to IT-Incubator')
    expect(mesages[2]).toBe('Hello Dmitry. Welcome to IT-Incubator')
})