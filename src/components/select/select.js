import './select.scss'

const Select = () => {
  return (
    <div className="header-nav__select">
      <span className='header-nav__select-about'>Sort by: </span>
      <select name="" id="header-nav__select">
      <option value="1">Most Upvotes</option>
      <option value="2">Least Upvotes</option>
      <option value="3">Most Comments</option>
      <option value="4">Least Comments</option>
    </select>
    </div>
  );
}

export default Select;