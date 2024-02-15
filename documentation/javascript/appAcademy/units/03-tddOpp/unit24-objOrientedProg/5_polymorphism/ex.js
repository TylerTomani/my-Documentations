class Charity{};

class Buisness {
    toString() {return "Give us money";};
}

class Restaurante{
    toString() {return "Eat at Joe's ";};
}

class AutoRepairShop extends Buisness{};

class Retail extends Buisness{
    toString() { return "Buy something";};
}

class ClothingStore extends Retail{};

class PhoneStore extends Retail{
    toString() { return "Upgrade phone";};
}
console.log(new Charity().toString());
console.log(new Buisness().toString());
console.log(new Restaurante().toString());
console.log(new AutoRepairShop().toString());
console.log(new Retail().toString());
console.log(new ClothingStore().toString());
console.log(new PhoneStore().toString());
