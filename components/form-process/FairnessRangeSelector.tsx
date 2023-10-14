import { useFormContext } from "@/contexts/FormContext";
import {
  calculateFairness,
  getFairnessLevel,
  getFairnessPercentage,
} from "@/utils/calculateFairnessSelect";
import React, { useEffect, useRef, useState } from "react";

const FairnessRangeSelector = () => {
  const { formValues, setValue } = useFormContext();
  const ref = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current != null) {
      let position = e.clientX - ref.current.getBoundingClientRect().left;
      const percentage = Math.ceil((position / ref.current.clientWidth) * 100);
      setPercentage(calculateFairness(percentage));
    }
  };

  useEffect(() => {
    const fairness = getFairnessLevel(percentage);
    if (fairness != "") {
      setValue("process", fairness);
    }
  }, [percentage]);

  useEffect(() => {
    setPercentage(getFairnessPercentage(formValues.process));
  }, [formValues]);

  return (
    <div ref={ref} onClick={onClick} className="h-2 bg-grey-mid cursor-pointer">
      <div
        style={{ width: percentage + "%" }}
        className="h-2 bg-primary-pink relative transition-all duration-150"
      >
        <div
          className={`h-6 w-6 bg-primary-pink rounded-full absolute ${
            percentage > 0 ? "right-[1px]" : "-right-2"
          } top-1/2 -translate-y-1/2`}
        ></div>
      </div>
    </div>
  );
};

export default FairnessRangeSelector;
