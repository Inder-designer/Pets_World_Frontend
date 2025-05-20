import { getIn, useFormikContext } from "formik";
import React, { useMemo } from "react";
import classNames from "classnames";
import { getRegionsByCountryCode } from "../../constants/global/regions";

interface ICountrySelect {
  name: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  inputClass?: string;
  labelClass?: string;
  error?: string;
  disabled?: boolean
}

const RegionSelect: React.FC<ICountrySelect> = ({
  name,
  label,
  placeholder,
  inputClass,
  labelClass,
  disabled = false
}) => {
  // Use a generic for useFormikContext to type values as Record<string, any>
  const { handleBlur, handleChange, values, errors, touched } = useFormikContext<Record<string, any>>();
  const fieldValue = getIn(values, name, "");
  const fieldError = getIn(errors, name);
  const fieldTouched = getIn(touched, name);
  const countryCode = values?.countryCode;

  const regions = useMemo(() => {
    if (!countryCode) return [];
    return getRegionsByCountryCode(countryCode) || [];
  }, [countryCode]);

  return (
    <div>
      {!!label && (
        <label
          htmlFor={name}
          className={classNames("text-[15px] text-text1 mb-1 inline-block font-medium", labelClass)}
        >
          {label}
        </label>
      )}
      <select
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        id={name}
        className={classNames(
          "py-2 px-3 text-text1 placeholder:text-text3 border-border1 w-full rounded-md",
          inputClass
        )}
        value={fieldValue}
        disabled={disabled}
      >
        <option hidden value="">
          Select {placeholder}
        </option>

        {regions.map((region) => (
          <option key={region.name} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>

      {fieldError && (fieldTouched === true) && <span className="text-red-700 text-xs font-medium mt-1 block">{fieldError}</span>}
    </div>
  );
};

export default RegionSelect;
