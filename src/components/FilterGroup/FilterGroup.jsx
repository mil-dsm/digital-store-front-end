import './FilterGroup.css'

// options: [{ text: 'Nike' }, { text: 'Puma', value: 'puma' }]
// selected: lista dos valores marcados; onChange(valor) avisa a página
function FilterGroup({ title, inputType = 'checkbox', options, selected = [], onChange }) {
  return (
    <div className="filter-group">
      <h4 className="filter-group__title">{title}</h4>

      {options.map((option) => {
        // Se a opção não tem "value", usa o próprio texto
        const value = option.value ?? option.text
        return (
          <label key={value} className="filter-group__option">
            <input
              type={inputType}
              name={title}
              value={value}
              checked={selected.includes(value)}
              onChange={() => onChange?.(value)}
            />
            {option.text}
          </label>
        )
      })}
    </div>
  )
}

export default FilterGroup