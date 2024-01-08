import { Model, ParamData } from './types'

const DEFAULT_PARAM_VALUE: ParamData = {
  paramId: 0,
  value: '',
}

export const DEFAULT_MODEL: Model = {
  paramValues: [DEFAULT_PARAM_VALUE],
}
