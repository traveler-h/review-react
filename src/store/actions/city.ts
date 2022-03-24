/* 
	该文件专门为Count组件生成action对象
*/
import {CHANGE_CITY} from '../constant'

//同步action，就是指action的值为Object类型的一般对象
export const changeCity = (data: any) => ({type:CHANGE_CITY,data})
