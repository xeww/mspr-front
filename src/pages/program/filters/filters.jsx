import "./filters.css";
import UserStarIcon from "../../../components/icons/user-star-icon.jsx";
import ExpandIcon from "../../../components/icons/expand-icon.jsx";
import { useContext, useEffect, useState } from "react";
import SceneIcon from "../../../components/icons/scene-icon.jsx";
import { FilterContext } from "../program-page.jsx";
import useData from "../../../hooks/use-data.js";
import Calendar from "react-calendar";
import CalendarIcon from "../../../components/icons/calendar-icon.jsx";
import FunctionIcon from "../../../components/icons/function-icon.jsx";

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
      <SingleFilter
        defaultStr="Date"
        menu={<FilterCalendarMenu type="date" />}
        leftIcon={<CalendarIcon />}
        rightIcon={<FunctionIcon />}
      />
    </section>
  );
}

function SingleFilter({ defaultStr, menu, leftIcon, rightIcon }) {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
  };

  return (
    <div>
      <div className="single-filter" onClick={handleClick}>
        {leftIcon}
        <p className="font-title">{defaultStr}</p>
        <div className="filter-expand-icon">{rightIcon}</div>
      </div>
      <div
        className={
          toggled ? "single-filter-menu__open" : "single-filter-menu__close"
        }
      >
        {menu}
      </div>
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

function FilterCalendarMenu({ type }) {
  const { filterSelection, setFilterSelection } = useContext(FilterContext);
  const [value, onChange] = useState(null);

  useEffect(() => {
    setFilterSelection({ ...filterSelection, [type]: value });
  }, [value]);

  return (
    <Calendar
      locale="fr-FR"
      selectRange={true}
      value={value}
      onChange={onChange}
      allowPartialRange={false}
    />
  );
}
