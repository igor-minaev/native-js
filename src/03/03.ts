import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export const createMessage= (city: CityType)=>{
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}