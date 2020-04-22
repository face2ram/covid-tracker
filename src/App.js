import React from 'react';
import './App.css';
import { fetchData } from './api/';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import image from './images/image.png';


export class App extends React.Component {
	state = {
		data: {},
		country: ''
	};

	async componentDidMount() {
		const data = await fetchData();

		this.setState({ data });
	}
	handleCountryChange = async (country) => {
		const data = await fetchData(country);

		this.setState({ data, country: country });
	};

	render() {
		const { data, country } = this.state;
		return (
			<div className="container">
				<img className="image" src={image} alt="COVID-19" />
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />				
			</div>
		);
	}
}

export default App;
