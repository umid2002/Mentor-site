import TypeBadge from "../type-badge/type-badge";


import "./type-filter.scss"

const typeFilter = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "UX"
  },
  {
    id: 3,
    name: "UI"
  },
  {
    id: 4,
    name: "Enhancement"
  },
  {
    id: 5,
    name: "Bug"
  },
  {
    id: 6,
    name: "Feature"
  }
]


const TypeFilter = () => {
  return (
    <form className="type-filter">
      {typeFilter.map(type => {
        return (
          <label key={type.key} className="type-filter__label">
            <input defaultChecked className="visually-hidden type-filter__radio" type="radio" name="type" />
            <TypeBadge key={typeFilter.id} className="type-filter__styled-radio">{type.name}</TypeBadge>
          </label>
        )
      })}
    </form>
  );
}

export default TypeFilter;
