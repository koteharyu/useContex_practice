import { EditButton } from './EditButton'

export const Card = () => {

  return (
    <div style={style}>
      <p>Haryu</p>
      <EditButton />
    </div>
  )
}

const style = {
  width: "300px",
  heigt: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9dbd0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}
