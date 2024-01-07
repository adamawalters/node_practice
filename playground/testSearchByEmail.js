
function searchByEmail(email, customers) {
  
    if(!Array.isArray(customers) || customers.length === 0) return -1;

    let hi = customers.length-1;
    let lo = 0;
    
    while(lo <= hi) {
      
      const mid = Math.floor((lo + hi) / 2)
      const currCustomer = customers[mid];
      const comparison = compare(currCustomer.email, email)
      
      if(comparison === 0 ) {
        return mid;
      } else if(comparison < 0) {
        lo = mid + 1;
        console.log(`Check higher: lo = ${lo} and hi=${hi}`)
      } else {
        hi = mid - 1;
        console.log(`Check lower: lo = ${lo} and hi = ${hi}`)
      }
      
    }
    
    return -1;
  }
  
  function compare(email1, email2) {
    console.log(`comparing email1: ${email1} to email2: ${email2}`)
    if(email1 < email2) {
      return -1;
    } else if (email1 === email2) {
      return 0;
    } else {
      return 1;
    }
  }


  let customers = [
    {
        email: "Roma_Halvorson@yahoo.com",
        lastName: "Adams"
    },
    {
        email: "S@s.com",
        lastName: "Jacobs"
    }, 
    {
        email: "Z@z.com",
        lastName: "Zoomaker"
    }
  ]

  console.log(searchByEmail("Z@z.com", customers))