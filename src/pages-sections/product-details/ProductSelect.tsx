import React, { useState, useEffect } from "react";

function ProductSelect({ product }) {
  // Estado para armazenar a opção selecionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Efeito para calcular o preço sempre que a opção selecionada mudar
  //   useEffect(() => {
  //     if (selectedOption) {
  //       onSelectChange(selectedOption);
  //     }
  //   }, [selectedOption, onSelectChange]);

  // Função para lidar com a seleção de uma opção
  const handleSelectChange = (e) => {
    const selectedSKU = e.target.value;
    const selectedChild = product.Children.find(
      (child) => child.SKU === selectedSKU
    );
    setSelectedOption(selectedChild);
  };

  if (product?.ProductGroupId === 3) {
    return (
      <select value={selectedOption} onChange={handleSelectChange}>
        {product?.Children.map((child) => (
          <option key={child.SKU} value={child.SKU}>
            {child.SKU}
          </option>
        ))}
      </select>
    );
  } else {
    return null; // Não renderiza o dropdown se ProductGroupId não for 3
  }
}

export default ProductSelect;
