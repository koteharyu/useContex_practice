import { useContext } from 'react'
import { AdminFlagContext } from './components/providers/AdminFlagProvider'
import { Card } from './Card'

const App = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext)
  const onClickSwitch = () => setIsAdmin(!isAdmin)

  return (
    <div>
      {isAdmin ? <span>"Admin"</span> : <span>"Not Admin"</span>}
      <button onClick={onClickSwitch}>Switch Admin</button>
      <Card isAdmin={isAdmin} />
    </div>
  )
}

export default App
