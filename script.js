async function fetchData() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const data = await response.json();
      console.log(data);
      renderTable(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData();

  function renderTable(data) {
    const tbody = document.querySelector('#crypto-table tbody');
    tbody.innerHTML = ''; 
  
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
       <td><img src="${item.image}" alt="${item.name}" width="30"></td>
        <td>${item.name}</td>
        <td>${item.id}</td>
        <td>${item.symbol}</td>
        <td>${item.current_price}</td>
        <td>${item.total_volume}</td>
      `;
      tbody.appendChild(row);
    });
  }

  
  document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredData = data.filter(item => 
      item.name.toLowerCase().includes(searchTerm) || 
      item.symbol.toLowerCase().includes(searchTerm)
    );
    renderTable(filteredData);
  });


