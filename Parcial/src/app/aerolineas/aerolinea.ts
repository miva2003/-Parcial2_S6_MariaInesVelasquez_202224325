import { Vuelo } from "../vuelos/vuelo";

export class Aerolinea {
    id: String;
    airlineName: String;
    country: String;
    city: String;
    address: String;
    identityColor:String;
    slogan: String;
    flights: Vuelo[]
    
    constructor( id: String,
    airlineName: String,
    country: String,
    city: String,
    address: String,
    identityColor:String,
    slogan: String, flights: Array<Vuelo>) {
        this.id = id;
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.address = address;
        this.identityColor=identityColor;
        this.slogan=slogan;
        this.flights = flights;
    }
}