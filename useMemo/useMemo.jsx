import React, { useMemo } from "react";

const FilteredList = ({ list }) => {
  const filteredList = useMemo(
    () => list.filter((item) => item.age > 18),
    [list]
  );

  return (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id}>
          Name: {item.name} | Age: {item.age}
        </li>
      ))}
    </ul>
  );
};

export default FilteredList;
