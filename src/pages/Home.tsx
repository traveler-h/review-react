import React, { useState } from 'react'
import store from '../store'

export default function Home(props: any) {
    const [city] = useState<string>(store.getState().city)
    return (
        <div>{city}</div>
    )
}
