import './index.css'

const Weather = props => {
  const {weather} = props
  const {icon, main, temp} = weather
  return (
    <div className="weather-container">
      <img src={icon} className="icon-weather" alt={main} />
      <p className="text">
        {temp}
        <sup>0</sup>
      </p>
      <p className="text">{main}</p>
    </div>
  )
}
export default Weather
