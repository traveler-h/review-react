import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Tabs } from 'antd-mobile'
import MYSwiper from '../../components/Swiper';
import { httpEnun } from '../../enums/httpEnums';
import { FilmState } from '../../state/FilmList';
import style from '../../style/pages/filmList.module.css'

export default function FilmList() {
    const [type, setType] = useState<number>(1);
    const [bannerList, setBannerList] = useState<FilmState["list"]>([])
    const [list, setList] = useState<FilmState["list"]>([])
    const handleClick = (key: string) => {
        setType(Number(key))
    }
    const reying_url: string = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=3395555'
    const shangying_url: string = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5970059'

    const getFileList = async (url: string): Promise<void> => {
        const res: AxiosResponse<any, any> = await axios({
            method: 'GET',
            url: url,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16478525261319486967775233"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })
        setList(res?.data?.data?.films)
    }
    // 获取bannerlist
    const getBannerList = async () => {
        const res = await axios({
            method: httpEnun.get,
            url: 'https://m.maizuo.com/gateway?type=2&cityId=810000&k=9157661',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "1648710866104560978821121", "bc": "110100" }',
                'X-Host': 'mall.cfg.common-banner'
            }
        })
        setBannerList(res?.data?.data)
    }
    // 根据type请求数据
    useEffect(() => {
        if (Number(type) === 1) {
            getFileList(reying_url)
        } else {
            getFileList(shangying_url)
        }
    }, [type])
    useEffect(() => {
        getBannerList()
    }, [])
    return (
        <div>
            {bannerList && <MYSwiper loop={true} autoplay={true} list={bannerList}></MYSwiper>}
            <Tabs onChange={handleClick}>
                <Tabs.Tab title='正在热映' key={1}>
                </Tabs.Tab>
                <Tabs.Tab title='即将上映' key={2}>
                </Tabs.Tab>
            </Tabs>

            <ul className={style.list}>
                {
                    list.map(item => {
                        return (
                            <li key={item?.filmId} className={style['list-item']}>
                                <img className={style.poster} src={item.poster} alt="" />
                                <Link to={`${item.filmId}`}><div>{item?.name}</div></Link>
                                <div>分类： {item?.category}</div>
                                <div>导演： {item?.director}</div>
                                <div>国家： {item?.nation}</div>
                                <div>简介： {item?.synopsis}</div>
                            </li>
                        )
                    })
                }
            </ul >
        </div >
    )
}
