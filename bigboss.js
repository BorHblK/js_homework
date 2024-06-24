const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          },
          {
            name: 'Клієнт 1.3',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.3.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
                partners: [
                    {
                        name: 'Клієнт 1.3.3.3',
                        type: 'subSubCompany',
                        uses: 'Рішення для продажу квитків',
                        sells: 'Рішення для продажу квитків',
                    }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
 
  function findValueByKey(company, companyName) {
    //keeping found company
    let foundCompany = null;
    //remember what objects we visited
    let visited = new Set();
    //looking for company
    function search(currentCompany) {
      if (visited.has(currentCompany)) {
        return; // Avoid cyclic references
      }
      //adding company as visited to remember
      visited.add(currentCompany);
      //hurrey, we found company
      if (currentCompany.name === companyName) {
        foundCompany = currentCompany;
        return;
      }
      //checking if found object company has clients
      if (currentCompany.clients) {
        currentCompany.clients.forEach(client => search(client));
      }
      //checking if found object company has partners
      if (currentCompany.partners) {
        currentCompany.partners.forEach(partner => search(partner));
      }
    }
  
    search(company);
    return foundCompany;
  }
  
 
  function printCompanyInfo(company, companyName) {
    const result = findValueByKey(company, companyName);
    if (result) {
        //converting object to JSON to see it more clearly
      console.log(JSON.stringify(result, null, 1));
    } else {
      console.log(`Компанію з назвою '${companyName}' не знайдено.`);
    }
  }
  


  printCompanyInfo(company, 'Клієнт 1.3'); // Інформація про Клієнт 1
  printCompanyInfo(company, 'Клієнт 1.2'); // Інформація про Клієнт 1.2
  printCompanyInfo(company, 'Клієнт 1.3.3'); // Інформація про Клієнт 1.3.3
  printCompanyInfo(company, 'Клієнт 2'); // Інформація про Клієнт 2
  printCompanyInfo(company, 'Клієнт 3'); // Компанію з назвою 'Клієнт 3' не знайдено.