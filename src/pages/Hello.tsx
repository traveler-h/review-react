import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { QMap } from 'react-tmap';

import { changeCity } from '../store/actions/city';

function Hello(props: any) {
  const navigate = useNavigate();
  const [cityList] = useState<Array<string>>(['北京', '上海', '广州', '深圳']);
  const handleClick = (city: string) => {
    props.changeCity(city);
    // 路由跳转
    navigate('/', { replace: false });
  };
  return (
    <div>
      <QMap
        center={{
          lng: 116.397469,
          lat: 39.908821
        }}
        style={{ height: '1000px' }}
        zoom={16}
        scaleControl={true}
      >
      </QMap>
      {/* {
        cityList.map(item =>
          (<div onClick={() => handleClick(item)} key={item}>{item}</div>)
        )
      } */}
    </div>
  );
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  (state: { city: string }) => ({
    city: state.city
  }),
  { changeCity: changeCity }
)(Hello);
