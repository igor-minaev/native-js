import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
        alert('user have been deleted')
    }

    const search = (event: MouseEvent<HTMLButtonElement>) => {

    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {

        console.log('age changed: ' + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type="number"/>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={deleteUser}>x</button>
        <button onClick={search}>search</button>
    </div>
}