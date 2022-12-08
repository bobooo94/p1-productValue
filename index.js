/* Zadatak 1:
Napraviti klasu Product koja ima sledeca polja:
- name, inicijalno prazan string
- price, inicijalno 0
- stockQuantity, inicijalno nula
i metodu:
- getStockValue koja vraca vrijednost na zalihi (price * stockQuantity)
Kreirati objekat product iz gore navedene klase i proslijediti vrijednosti za name, price i stockQuantity (proizvolje). 
Nakon toga ispisati vrijednost koju vraca getStockValue metoda u konzoli. */

class Product {

	constructor(name, price, stockQuantity) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }

	getStockValue() {
        return this.price * this.stockQuantity;
    }
}

const headset = new Product("HyperX", "120", "13")

console.log(headset.getStockValue());