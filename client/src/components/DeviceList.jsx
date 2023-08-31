import { observer } from "mobx-react-lite";
import React, { useContext} from "react";
import { Context } from "..";
import DeviceItem from "./DeviceItem";
import '../pages/cards.css';

const DeviceList = observer(() => {
  const data = useContext(Context);
  return (
    <div className="cards">
        {data.device.devices.map((dev, index) => {
          const brand = data.device.brands.find(b => dev.brandId === b.id)
          return  <DeviceItem key={dev.id} dev={dev} index={index} brandId={dev.brandId} brandName={brand}/>
        }
            
            )}
    </div>
  );
});

export default DeviceList;
