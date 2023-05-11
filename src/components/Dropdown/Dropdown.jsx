import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import css from "../Dropdown/Dropdown.module.css";
import { ReactComponent as Icon } from "../../images/dropdownIcon.svg";

const options = ["all", "follow", "not follow"];

const Dropdown = ({ placeHolder, getFilteredValue }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    getFilteredValue(option);
  };

  const isSelected = (option) => {
    if (option !== selectedValue) {
      return false;
    }
    return true;
  };

  return (
    <div className={css.DropdownContainer}>
      <div className={css.DropdownInput} onClick={handleInputClick}>
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={css.DropdownMenu}>
          {options.map((option) => (
            <div
              key={option}
              className={
                isSelected(option)
                  ? `${css.DropdownItemSelected}`
                  : `${css.DropdownItem}`
              }
              onClick={() => onItemClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  getFilteredValue: PropTypes.func.isRequired,
};

export default Dropdown;
