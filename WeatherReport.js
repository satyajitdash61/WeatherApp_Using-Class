class WeatherReport {

// creating constructor having state,temp and sky

    constructor(data) {
        this.state = data.state;
        this.temp = data.temp;
        this.sky = data.sky;
    }
    getState() {
        return this.state;
    }
    getTemp() {
        return this.temp;
    }
    getSky() {
        return this.sky;
    }
}