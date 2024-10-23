//用于props的类型定义
//定义接口 限制单个对象的属性和方法
export interface PropsEntrance {
    name: string,
    num: number,
    data: number[]
}

//定义PropsSet的类型为PropsEntrance数组
export type PropsSet = Array<PropsEntrance>