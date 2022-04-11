import React from 'react'
import { Swiper } from 'antd-mobile';

export default function MYSwiper(props: any) {
    console.log(props);
    return (
        <Swiper
            indicatorProps={{
                color: 'primary',
            }}
            loop={props.loop}
            autoplay={props.autoplay}
            defaultIndex={1}
            style={{
                '--track-padding': ' 0 0 16px'
            }}
        >
            {
                props.list.map((item: any) =>
                    <Swiper.Item key={item.bannerId || item}>
                        <img src={item.imgUrl || item} alt={item.name} style={{
                            'width': '100%'
                        }} />
                    </Swiper.Item>)
            }
        </Swiper>
    )
}
