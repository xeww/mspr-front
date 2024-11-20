import "./filters.css";
import UserStarIcon from "../../../components/icons/user-star-icon.jsx";
import ExpandIcon from "../../../components/icons/expand-icon.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import SceneIcon from "../../../components/icons/scene-icon.jsx";
import { FilterContext } from "../program-page.jsx";
import useData from "../../../hooks/useData.js";

export default function Filters() {
  const artists = useData(-1, "artist");
  const scenes = useData(-1, "scene");

  return (
    <section className="filters-container">
      <SingleFilter
        defaultStr="Artiste"
        menu={<FilterListMenu choices={artists} type="artist" />}
        leftIcon={<UserStarIcon />}
        rightIcon={<ExpandIcon />}
      />
      <SingleFilter
        defaultStr="Scène"
        menu={<FilterListMenu choices={scenes} type="scene" />}
        leftIcon={<SceneIcon />}
        rightIcon={<ExpandIcon />}
      />
    </section>
  );
}

function SingleFilter({ defaultStr, menu, leftIcon, rightIcon }) {
  const [toggled, setToggled] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.display = toggled ? "block" : "none";
    }
  }, [toggled]);

  return (
    <div>
      <div className="single-filter" onClick={handleClick}>
        {leftIcon}
        <p className="font-title">{defaultStr}</p>
        <div className="filter-expand-icon">{rightIcon}</div>
      </div>
      <div ref={menuRef}>{menu}</div>
    </div>
  );
}

function FilterListMenu({ choices, type }) {
  const { filterSelection, setFilterSelection } = useContext(FilterContext);

  const handleClick = (item) => {
    if (filterSelection[type].includes(item)) {
      /* Removing from the filter selection*/
      const updatedSelection = filterSelection[type].filter(
        (selectedItem) => selectedItem !== item,
      );
      setFilterSelection({ ...filterSelection, [type]: updatedSelection });
    } else {
      /* Adding to the filter selection */
      const updatedSelection = [...filterSelection[type], item];
      setFilterSelection({ ...filterSelection, [type]: updatedSelection });
    }
  };

  useEffect(() => {
    if (choices) {
      setFilterSelection({ ...filterSelection, [type]: choices });
    }
  }, [choices]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="filter-menu">
      {choices &&
        choices.map((item) => (
          <p
            key={item.id}
            className={`font-body filter-menu-choice ${
              filterSelection[type].includes(item)
                ? " filter-menu-choice-selected"
                : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </p>
        ))}
    </div>
  );
}
