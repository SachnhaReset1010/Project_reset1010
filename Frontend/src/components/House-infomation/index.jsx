import React from "react";
import FormHouseInfo from "../form-home-info";
import UploadHomeInfo from "../upload-home-info";

function HouseInformation() {
  return (
    <div className="p-3">
      <div className="form__content">
        <FormHouseInfo />
        <UploadHomeInfo />
      </div>
    </div>
  );
}

export default HouseInformation;
