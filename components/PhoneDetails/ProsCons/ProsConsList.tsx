import React from "react";

export const ListItems = React.memo(({ items }: { items: string[] }) => {
  return (
    <ul className="text-white">
      {items.map((item, index) => (
        <li key={index} className="style-none">
          {index + 1}
          {": "}
          {item}
        </li>
      ))}
    </ul>
  );
});

ListItems.displayName = "ListItems";
