import React, { useState } from 'react'
import { CascaderView, Steps, Space, Swiper } from 'antd-mobile'

import { options, sameValueOptions } from './data'
import styles from '../../style/pages/antdMobile.module.css'
const { Step } = Steps
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
        <div className={styles.content} style={{ background: color }}>
            {index + 1}
        </div>
    </Swiper.Item>
))
export default () => {
    const [value, setValue] = useState<string[]>([])

    return (
        <>
            <Steps current={2}>
                <Step title='第一步' />
                <Step title='第二步' />
                <Step title='第三步' status='error' />
                <Step title='第四步' />
            </Steps>
            <Steps direction='vertical'>
                <Step title='填写机构信息' status='process' />
                <Step title='签约机构' status='wait' />
                <Step title='关联服务区' status='wait' />
            </Steps>
            <CascaderView
                options={options}
                value={value}
                onChange={(val, extend) => {
                    setValue(val)
                    console.log('onChange', val, extend.items)
                }}
            />
        </>
    )
}
