import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    const callbackfn = (h:HouseType) => `Hello guys from ${h.address.street.title}`;
    return houses.map(callbackfn)
}




