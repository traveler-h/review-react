import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FilmListProps, FilmState } from '../state/FilmList';

export default function FilmListF(props: FilmListProps): JSX.Element {
    const reying_url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=3395555';
    const shangying_url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5970059';
    const [list, setList] = useState<FilmState['list']>([]);
    const getFileList = async (url: string): Promise<void> => {
        const res: AxiosResponse<any, any> = await axios({
            method: 'GET',
            url: url,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16478525261319486967775233"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        });
        setList(res?.data?.data?.films);
    };
    // 根据type请求数据
    useEffect(() => {
        if (Number(props.type) === 1) {
            getFileList(reying_url);
        } else {
            getFileList(shangying_url);
        }
    }, [props.type]);
    return (
        <ul>
            {
                list.map(item => {
                    return (<Link key={item?.filmId} to={`${item.filmId}`}><li>{item?.name}</li></Link>);
                })
            }
        </ul>
    );
}
