import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [converted, setConverted] = useState('');

  const handleConvert = () => {
    const parts = input.split(' ');
    if (parts.length === 2) {
      const firstPart = parseFloat(parts[0].replace(',', '.'));
      const secondPart = parseFloat(parts[1].replace(',', '.'));
      setConverted(`${secondPart.toFixed(6)} ${firstPart.toFixed(6)}`);
    } else {
      alert('Input tidak valid. Harap masukkan dua angka dipisahkan oleh spasi.');
    }
  };

  const handleSearch = () => {
    if (converted) {
      const query = encodeURIComponent(converted);
      const url = `https://www.google.com/search?q=${query}`;
      window.open(url, '_blank');
    } else {
      alert('Harap konversi data terlebih dahulu.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '500px' }}>
      <h2>Search Gardu Location</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Masukkan data"
        style={{ width: '300px', padding: '10px' }}
      />
      <br /><br />
      <button onClick={handleConvert} style={{ padding: '10px 20px', marginRight: '10px' }}>
        Convert
      </button>
      <button onClick={handleSearch} style={{ padding: '10px 20px' }}>
        Search Google
      </button>
      <br /><br />
      {converted && <p>Converted Data: {converted}</p>}
    </div>
  );
}

export default App;
