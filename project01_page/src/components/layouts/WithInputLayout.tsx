import { PropsWithChildren } from 'react'

// input이 있는 layout
const WithInputLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1>Input Layout</h1>
      {children}
    </div>
  )
}

export default WithInputLayout
