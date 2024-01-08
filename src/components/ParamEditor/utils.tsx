import { Model, Param as ParamApi } from '../../types'
import { Param } from "./types"

export type GenerateParamList = (model: Model, params: ParamApi[]) => Record<string, Param>

export const generateParamList: GenerateParamList = (model, params) => {
  return model.paramValues.reduce<Param[]>((acc, { paramId, value }) => {
    const param = params.find(({ id }) => id === paramId)

    if (!param) return acc

    return [...acc, {
      id: paramId,
      name: param.name,
      type: param.type,
      value
    }]
  }, [])
}