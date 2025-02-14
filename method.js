let services = {
  list: {
      "установка Windows": "200 грн",
      "очистка компьютера": "100 грн",
      "анти вірус": "150 грн"
  },

  //  Загальна вартость послуг
  price: function() {
      let total = Object.values(this.list)
          .map(price => parseInt(price))
          .reduce((sum, price) => sum + price, 0);
      return total + " грн";
  },

  //  Мінімальна ціна серед послуг
  minPrice: function() {
      let prices = Object.values(this.list).map(price => parseInt(price));
      return prices.length > 0 ? Math.min(...prices) + " грн" : "Послуг немає";
  },

  //  Максимальна ціна серед послуг
  maxPrice: function() {
      let prices = Object.values(this.list).map(price => parseInt(price));
      return prices.length > 0 ? Math.max(...prices) + " грн" : "Послуг немає";
  },

  //  Додавання нових послуг
  addService: function(name, price) {
      this.list[name] = price + " грн";
  }
};

// Додаємо нові послуги динамічно
services.addService("налаштування програм", 250);
services.addService("заміна комплектуючих", 300);

// Викликаємо методи
console.log("Список послуг:", services.list);
console.log("Загальна вартість: " + services.price());
console.log("Мінімальна ціна: " + services.minPrice());
console.log("Максимальна ціна: " + services.maxPrice());
