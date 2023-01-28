import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h5 className="mb-3">Catagories:</h5>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
