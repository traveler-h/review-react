import { List, Image } from 'antd-mobile';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import MYSwiper from '../../components/Swiper';

export default function FilmDetail() {
  const params = useParams()
  const [detail, setDetail] = useState<any>({})
  const getFileDetail = async (id: string): Promise<void> => {
    const res: AxiosResponse<any, any> = await axios({
      method: 'GET',
      url: 'https://m.maizuo.com/gateway',
      params: {
        filmId: id,
        k: 1703039
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1648710866104560978821121","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    })
    setDetail(res?.data?.data?.film)
  }
  useEffect(() => {
    getFileDetail((params.id as string))
  }, [params.id])
  return (
    <div>
      {detail?.name}
      {detail?.photos && <MYSwiper loop={true} autoplay={true} list={detail?.photos}></MYSwiper>}
      <List header='演员列表'>
        {detail?.actors && detail?.actors.map((user: any) => (
          <List.Item
            key={user.name}
            prefix={
              <Image
                src={user.avatarAddress}
                style={{ borderRadius: 20 }}
                fit='cover'
                width={40}
                height={40}
              />
            }
            description={user.role}
            title={user.name}
          >
          </List.Item>
        ))}
      </List>
    </div>
  )
}
