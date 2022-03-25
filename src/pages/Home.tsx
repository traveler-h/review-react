import React, { useState } from 'react'
import Count from '../components/Count'
import store from '../store'

export default function Home(props: any) {
    const [city] = useState<string>(store.getState().city)
    return (
        <div>
            {city}
            <Count />
        </div>

    )
}
