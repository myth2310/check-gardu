import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [converted, setConverted] = useState('');

  const handleConvert = () => {
    const parts = input.trim().split(/\s+/); // Mengatasi spasi ganda
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
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <h3>Check Gardu Location</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Masukkan data"
          style={styles.input}
        />
        <br /><br />
        <button onClick={handleConvert} style={styles.button}>
          Convert
        </button>
        <button onClick={handleSearch} style={styles.button}>
          Search Google
        </button>
        <br /><br />
        {converted && <p>Converted Data: {converted}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    paddingLeft: '500px',
    paddingRight: '400px',
    paddingTop: '50px',
  },
  innerContainer: {
    width: '400px',
  },
  input: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor : 'red',
  },
};

export default App;
