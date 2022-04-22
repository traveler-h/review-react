import { useEffect, useState } from 'react';

import { getFilmList } from '../api/home';
import Count from '../components/Count';
import store from '../store';

export default function Home(props: any) {
    const [city] = useState<string>(store.getState().city);
    const getFilmsList = async () => {
        const res = await getFilmList();
        console.log(res);
    };
    useEffect(() => {
       getFilmsList();
    }, []);
    return (
        <div>
            {city}
            <Count />
        </div>

    );
}
