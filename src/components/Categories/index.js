import PlaceMaker from '../PlaceMaker'
import './index.css'

const Categories = props => {
  const {categories} = props

  const {hotels, offices, places, restaurants} = categories

  return (
    <div className="main-container-kj">
      <div className="categories-container">
        <h1 className="heading">Hotels</h1>
        {hotels.map(each => (
          <PlaceMaker key={each.id} details={each} />
        ))}
      </div>
      <div className="categories-container">
        <h1 className="heading">Offices</h1>
        {offices.map(each => (
          <PlaceMaker key={each.id} details={each} />
        ))}
      </div>
      <div className="categories-container">
        <h1 className="heading">Places</h1>
        {places.map(each => (
          <PlaceMaker key={each.id} details={each} />
        ))}
      </div>

      <div className="categories-container">
        <h1 className="heading">restaurants</h1>
        {offices.map(each => (
          <PlaceMaker key={each.id} details={each} />
        ))}
      </div>
    </div>
  )
}

export default Categories
