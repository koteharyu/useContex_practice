import { useContext } from 'react'
import { AdminFlagContext } from './components/providers/AdminFlagProvider'

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext)
  return (
    <button style={style} disabled={!isAdmin}>Edit</button>
  )
}

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px"
}
