import { Link } from "react-router-dom";

import "./main-btn.scss";


const NeededComponent = (props) => props.to ? <Link {...props} /> : <button {...props} />

const MainBtn = ({ className = "", ...props }) => {
  return (
    <NeededComponent {...props} className={`main-btn ${className}`} />
  )
};

export default MainBtn;