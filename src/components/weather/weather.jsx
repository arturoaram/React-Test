import React from 'react';
import ForcastCard from './forecast-card';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: {},
      err: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      'http://api.openweathermap.org/data/2.5/forecast?q=Raleigh,usa&appId=787d6c3c9f9fa32c8cae2da70c768bfa'
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            res: { ...result }
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            err: error
          });
        }
      );
  }

  render() {
    const { res, err, isLoaded } = this.state;

    if (err) {
      return <div>Error: {err}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const { list, city } = res;
      return (
        <div>
          <h1>Weather Dique Chanell - {city.name}</h1>
          {list.map(item => (
            <ForcastCard key={item.dt} value={item} />
          ))}
        </div>
      );
    }
  }
}

export default Weather;
