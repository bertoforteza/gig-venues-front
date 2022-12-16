import React from "react";
import useVenues from "../../hooks/useVenues/useVenues";
import { addFilterActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { getVenues } = useVenues();

  const filterCapacity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValues = event.target.value.split("-");
    dispatch(
      addFilterActionCreator({
        minCapacity: +filterValues[0],
        maxCapacity: +filterValues[1],
      })
    );
    getVenues(0, +filterValues[0], +filterValues[1]);
  };

  return (
    <FilterStyled>
      <label htmlFor="capacity" className="filter-label">
        FILTER BY CAPACITY
      </label>
      <select
        name="capacity-filter"
        id="capacity"
        onChange={filterCapacity}
        className="filter-select"
      >
        <option>All venues</option>
        <option value={"0-50"}>0 - 50</option>
        <option value={"50-250"}>50 - 250</option>
        <option value={"250-500"}>250 - 500</option>
        <option value={"500-1000"}>500 - 1000</option>
        <option value={"1000-5000"}>1000 - 5000</option>
        <option value={"5000-1000000"}> {">"}5000</option>
      </select>
    </FilterStyled>
  );
};

export default Filter;
