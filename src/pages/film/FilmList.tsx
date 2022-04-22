import { InfiniteScroll, NavBar, Space, Tabs } from 'antd-mobile';
import { SearchOutline } from 'antd-mobile-icons';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import MYSwiper from '../../components/Swiper';
import { httpEnun } from '../../enums/httpEnums';
import { FilmState } from '../../state/FilmList';
import store from '../../store';
import style from '../../style/pages/filmList.module.css';

export default function FilmList(props: any) {
    const [type, setType] = useState<number>(1);
    const [bannerList, setBannerList] = useState<FilmState['list']>([]);
    const [list, setList] = useState<FilmState['list']>([]);
    const [city] = useState<string>(store.getState().city);
    const handleClick = (key: string) => {
        setType(Number(key));
        pageNum.current = 0;
        setList([]);
        if (Number(type) === 1) {
            getFileList(reying_url);
        } else {
            getFileList(shangying_url);
        }
    };
    const pageNum = useRef<number>(0);
    const reying_url = '/gateway?cityId=110100&k=3395555';
    const shangying_url = '/gateway?cityId=110100&k=5970059';
    const [hasMore, setHasMore] = useState(true);
    const right = (
        <div style={{ fontSize: 24 }}>
            <Space style={{ '--gap': '16px' }}>
                <SearchOutline />
            </Space>
        </div>
    );
    const getFileList = async (url: string): Promise<void> => {
        const res: AxiosResponse<any, any> = await axios({
            method: httpEnun.get,
            url: url,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16478525261319486967775233"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
            params: {
                pageNum: pageNum.current,
                pageSize: 10,
                type: type
            }
        });
        console.log(res);
        setList([...list, ...res?.data?.data?.films]);
        setHasMore(res?.data?.data?.films.length > 0);
    };
    // 获取bannerlist
    const getBannerList = async () => {
        const res = await axios({
            method: httpEnun.get,
            url: '/gateway?type=2&cityId=810000&k=9157661',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "1648710866104560978821121", "bc": "110100" }',
                'X-Host': 'mall.cfg.common-banner'
            }
        });
        setBannerList(res?.data?.data);
    };
    async function loadMore() {
        pageNum.current++;
        setHasMore(false);
        if (Number(type) === 1) {
            getFileList(reying_url);
        } else {
            getFileList(shangying_url);
        }

    }
    // 根据type请求数据
    // useEffect(() => {
    //     if (Number(type) === 1) {
    //         getFileList(reying_url)
    //     } else {
    //         getFileList(shangying_url)
    //     }
    //     // loadMore()
    // }, [type])
    // useEffect(() => {
    //     getBannerList()
    // }, [])
    return (
        <div>
            <NavBar left={city} right={right} back={null}>
                推荐电影
            </NavBar>
            {bannerList && <MYSwiper loop={true} autoplay={true} list={bannerList}></MYSwiper>}
            <Tabs onChange={handleClick}>
                <Tabs.Tab title="正在热映" key={1}>
                </Tabs.Tab>
                <Tabs.Tab title="即将上映" key={2}>
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
                        );
                    })
                }
            </ul >
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div >
    );
}
