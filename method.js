// Вартість послуг
let services = {
    "установка Windows": "200 грн",
    "очистка компьютера": "100 грн",
    "анти вірус": "150 грн",
  

    price: function() {
      let total = 0;
      for (let service in this) {
        if (typeof this[service] === "string" && this[service].includes("грн")) {
          total += parseInt(this[service]); 
        }
      }
      return total + " грн"; 
    }
  };
  
  
  services["налаштування програм"] = "250 грн";
  services["заміна комплектуючих"] = "300 грн";
  

  console.log("Загальна вартість послуг: " + services.price());

//Мінімальна ціна
  let services = {
    "установка Windows": "200 грн",
    "очистка компьютера": "100 грн",
    "анти вірус": "150 грн",
  
   
    minPrice: function() {
      let prices = [];
      for (let service in this) {
        if (typeof this[service] === "string" && this[service].includes("грн")) {
          prices.push(parseInt(this[service])); 
        }
      }
      return prices.length > 0 ? Math.min(...prices) + " грн" : "Послуг немає"; 
    }
  };
  
  
  services["налаштування програм"] = "250 грн";
  services["заміна комплектуючих"] = "300 грн";
  
  
  console.log("Мінімальна ціна послуги: " + services.minPrice());

//Максимальна ціна
  let services = {
    "установка Windows": "200 грн",
    "очистка компьютера": "100 грн",
    "анти вірус": "150 грн",
  
    
    maxPrice: function() {
      let prices = []; 
      for (let service in this) {
        if (typeof this[service] === "string" && this[service].includes("грн")) {
          prices.push(parseInt(this[service])); 
        }
      }
      return prices.length > 0 ? Math.max(...prices) + " грн" : "Послуг немає"; 
    }
  };
  
  
  services["налаштування програм"] = "250 грн";
  services["заміна комплектуючих"] = "300 грн";
  
  
  console.log("Максимальна ціна послуги: " + services.maxPrice());
