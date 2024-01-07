function searchByName(firstName, lastName, customers) {
    const customerToFind = {
      firstName, 
      lastName
    }
    
    if(!customers || customers.length === 0) return -1;
    
    let lo = 0;
    let hi = customers.length-1;
    
    while(lo <= hi){
      const mid = Math.floor((lo + hi) / 2);
      const currCustomer = customers[mid];
      const comparison = compare(currCustomer, customerToFind)
      
      if(comparison === 0) {
        return mid;
      } 
      
      if(comparison < 0) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    
    return -1;
    
  }
  
    function compare(customer1, customer2) {
      if(customer1.lastName < customer2.lastName) {
        return -1;
      }
  
      if(customer1.lastName > customer2.lastName) {
        return 1;
      }
  
      if(customer1.lastName === customer2.lastName) {
  
        if(customer1.firstName < customer2.firstName) {
          return -1;
        } else if (customer1.firstName > customer2.firstName) {
          return 1;
        }
  
        return 0;
      }
  }

  let customers = [
    {
        firstName: "Adam",
        lastName: "Adams"
    },
    {
        firstName: "John",
        lastName: "Jacobs"
    }, 
    {
        firstName: "Zoe",
        lastName: "Zoomaker"
    }
  ]

 

  console.log(searchByName("John", "Jacobs", customers))