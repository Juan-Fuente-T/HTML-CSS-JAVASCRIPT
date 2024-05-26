function ScoreCar(brand, model){
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.speedUp = function () {
        this.speed += 5;
    };
    this.speedDown = function () {
        this.speed -= 5;
    };
    this.toString = function () {
        console.log("Mi" + this.brand + " " + this.model + " va a " + this.speed + " km/h" );
    };
}

var car = new ScoreCar("Citroen", "Xsara");
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
car.toString();
car.speedDown();
car.speedDown();
car.toString();