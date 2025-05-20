import { getIn, useFormikContext } from "formik";
import React from "react";
import classNames from "classnames";
import { countriesList, getCountryCodeFromName } from "../../constants/global/countries";

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

const CountrySelect: React.FC<ICountrySelect> = ({
  name,
  label,
  placeholder,
  inputClass,
  labelClass,
  disabled = false
}) => {
  const { handleBlur, values, errors, touched, setFieldValue } = useFormikContext();
  const fieldValue = getIn(values, name, "");
  const fieldError = getIn(errors, name);
  const fieldTouched = getIn(touched, name);
  
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
        onChange={(e) => {
          setFieldValue(name, e.target.value);
          setFieldValue("countryCode", getCountryCodeFromName(e.target.value));
        }}
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
        {countriesList.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </select>
      {fieldError && (fieldTouched === true) && <span className="text-red-700 text-xs font-medium mt-1 block">{fieldError}</span>}
    </div>
  );
};

export default CountrySelect;
