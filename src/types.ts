export type ParamType = 'str' | 'num'

export type ParamDataValue = string

export interface Param {
  id: number
  name: string
  type: ParamType
}

export interface ParamData {
  paramId: number
  value: ParamDataValue
}

export interface Model {
  paramValues: ParamData[]
}
