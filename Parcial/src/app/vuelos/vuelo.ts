export class Vuelo {
    id: String;
    departureAirport: String;
    departureCountry: String;
    departureCity: String;
    arrivalAirport: String;
    arrivalCountry: String;
    arrivalCity: String;
    departureTime: String;
    flightDuration: number;
    image: String;

    constructor(id: String,
        departureAirport: String,
        departureCountry: String,
        departureCity: String,
        arrivalAirport: String,
        arrivalCountry: String,
        arrivalCity: String,
        departureTime: String,
        flightDuration: number,
        image: String) {
        this.id = id;
        this.departureAirport = departureAirport;
        this.departureCountry = departureCountry;
        this.departureCity = departureCity;
        this.arrivalAirport = arrivalAirport;
        this.arrivalCountry = arrivalCountry;
        this.arrivalCity = arrivalCity;
        this.departureTime = departureTime;
        this.flightDuration = flightDuration;
        this.image = image;
    }
}
