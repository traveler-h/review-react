import React, { useState } from 'react'
import FilmListF from '../../components/FilmListF';

export default function FilmList() {
    const [type, setType] = useState<number>(1);
    const handleClick = (e: any) =>{
        setType(e.target.value)
    }
    return (
        <div>
            <div>
                <button onClick={handleClick} value={1}>正在热映</button>
                <button onClick={handleClick} value={2}>即将上映</button>
            </div>
            
            <FilmListF type={type}></FilmListF>
        </div>
    )
}
