import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeCity } from '../store/actions/city'
 function Hello(props: any) {
    const navigate = useNavigate()
    const [cityList] = useState<Array<string>>(["北京", "上海", "广州", "深圳"])
    const handleClick = (city: string) => {
        props.changeCity(city)
        navigate('/', { replace: false })
    }
    return (
        <div>
            {
                cityList.map(item =>
                    (<div onClick={() => handleClick(item)} key={item}>{item}</div>)
                )
            }
        </div>
    )
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => state,
    { changeCity }
)(Hello)
