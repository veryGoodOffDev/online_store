import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import './brandBar.css';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="brand__list">
      {device.brands.map((brand) => (
        <div className={brand.id === device.selectedBrand.id ? 'brand__card active' : 'brand__card'}
          style={{ cursor: "pointer" }}
          border={brand.id === device.selectedBrand.id ? "success" : "none"}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
});

export default BrandBar;
