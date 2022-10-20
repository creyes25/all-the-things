import ThingCard from '../../components/ThingCard/ThingCard'
import { Link } from 'react-router-dom'

const SillyThings = ({things}) => {
  return (
    <>
      <h1>Ana's Things</h1>
      <Link to="/">Home</Link>

      {things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default SillyThings
