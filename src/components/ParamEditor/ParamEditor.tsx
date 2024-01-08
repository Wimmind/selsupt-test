import React from "react"
import { Model, Param as ParamApi } from '../../types'
import { Param } from "./types"
import { generateParamList } from "./utils"


interface Props {
  params: ParamApi[]
  model: Model
}

interface State {
  params: Record<string, Param>
}

type RenderParam = (param: Param) => JSX.Element

export class ParamEditor extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.setState({
      params: generateParamList(
        props.model,
        props.params
      )
    })
  }

  public getModel = (): Model => {
    return {
      paramValues: this.state.params.map(({ id, value }) => ({
        paramId: id,
        value
      }))
    }
  }

  public changeValue = (value: string, id: number) => {
    this.setState({})
  }

  public renderParam: RenderParam = (param) => {
    const { type, value, id, name } = param

    switch (type) {
      case 'str':
        return <input value={value} />
      case 'num':
        return <input type='number' value={value} />
      default:
        console.error('Undefined param type')
        return <></>
    }
  }

  public render() {
    return this.state.params.map(param => this.renderParam(param))
  }
}