import './Card.css'

const Card = ({ title, image }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default Card
