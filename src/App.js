import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menuItems from "./data";

const allCategories = ["All", ...new Set(menuItems.map((i) => i.category))];

console.log(allCategories);

function App() {
  const [menu, setMenu] = useState(menuItems);
  const [categories, setCategories] = useState(allCategories);

  const FilterItems = (c) => {
    if (c === "All") {
      setMenu(menuItems);
      return;
    }

    const newItems = menuItems.filter((i) => i.category === c);
    setMenu(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filteritems={FilterItems} />
        <Menu Items={menu} />
      </section>
    </main>
  );
}

export default App;
