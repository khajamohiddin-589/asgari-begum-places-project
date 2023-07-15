import './index.css'

const PlaceMaker = props => {
  const {details} = props
  const {address, checkIn, checkOut, imageUrl, name, price, rating} = details
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'SAT', 'SUN']
  const randomDay = days[Math.floor(Math.random() * 8)]
  console.log(randomDay)
  return (
    <div className="container">
      <img src={imageUrl} className="image" alt="img" />
      <div className="item-details">
        <h1 className="details-text">{name}</h1>
        <h1 className="details-text">
          <span className="color">{rating} </span>Stars
        </h1>
        <h1 className="details-text">{address}</h1>
      </div>
      <div className="check-in-container">
        <h1 className="check-in">Check-in</h1>
        <h1 className="date">{checkIn}</h1>
        <h1 className="check-in">{randomDay}</h1>
      </div>
      <div className="check-out-container">
        <h1 className="check-in">Check-out</h1>
        <h1 className="date">{checkOut}</h1>
        <h1 className="check-in">{randomDay}</h1>
      </div>
      <div className="final-container">
        <h1 className="from">
          From <span className="new-color">Rs{price}</span>
        </h1>
        <button type="button" className="kj-button">
          Book Now
        </button>
        <h1 className="from">Have a promo code?</h1>
      </div>
    </div>
  )
}

export default PlaceMaker
