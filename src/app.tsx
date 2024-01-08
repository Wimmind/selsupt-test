import { FC } from 'react'
import { ParamEditor } from './components/ParamEditor'
import { PARAMS, MODEL } from './fixtures'


export const App: FC = () => {
  return (
    <div>
      <ParamEditor params={PARAMS} model={MODEL} />
    </div>
  )
}
