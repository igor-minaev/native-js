import React, {useState} from "react";

type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: { model: string }
}

function useDimychState(m:string){
    return [m,function(){}]
}


export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man,...restProps} = props
    // const {name} = props.man

    const [message, setMessage] = useState<string>('hello')
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{man.name}</div>
        <div>{props.car.model}</div>
    </div>
}