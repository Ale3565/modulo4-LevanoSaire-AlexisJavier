const InputSearch = ({ setSearchLocation }) => {
  const searchLocation = (e) => {
    e.preventDefault();
    const input = e.target.firstChild;
    const value = parseInt(input.value);

    // Validación del rango
    if (isNaN(value) || value < 1 || value > 126) {
      input.style.borderColor = 'red';
      input.setCustomValidity('Por favor ingrese un número entre 1 y 126');
      input.reportValidity();
      return;
    }

    input.style.borderColor = '#cbde5d';
    input.setCustomValidity('');
    setSearchLocation(value);
    input.value = ''; // Limpiar el campo después de una búsqueda exitosa
  };

  const handleInput = (e) => {
    const input = e.target;
    const value = parseInt(input.value);

    if (input.value === '') {
      input.style.borderColor = '#cbde5d';
      input.setCustomValidity('');
    } else if (isNaN(value) || value < 1 || value > 126) {
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '#cbde5d';
    }
  };

  return (
    <form onSubmit={searchLocation} className="input">
      <input 
        type="text" 
        placeholder="Input a dimension number from 1 to 126"
        onInput={handleInput}
      />
      <button>Search</button>
    </form>
  );
};

export default InputSearch;
