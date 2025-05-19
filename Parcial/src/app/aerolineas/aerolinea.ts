export class Aerolinea {
    id: String;
    airlineName: String;
    country: String;
    city: String;
    address: String;
    identityColor:String;
    slogan: String;
    
    constructor( id: String,
    airlineName: String,
    country: String,
    city: String,
    address: String,
    identityColor:String,
    slogan: String ){
        this.id = id;
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.address = address;
        this.identityColor=identityColor;
        this.slogan=slogan;
    }
}