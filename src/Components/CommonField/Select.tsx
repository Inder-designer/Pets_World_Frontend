import { getIn, useFormikContext } from "formik";
import React from "react";
import classNames from "classnames";

interface ISelect {
  name: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  inputClass?: string; //  i am taking label class, input class in differnet because of tailwind , as passing tailwind class is easy as compared to giving parent class and writing manual css
  labelClass?: string;
  options: option[];
  error?: string;
  disabled?: boolean
}

type option = {
  label: string;
  value: string | number;
};

const Select: React.FC<ISelect> = ({
  name,
  options,
  label,
  placeholder,
  inputClass,
  labelClass,
  disabled = false
}) => {
  const { handleBlur, handleChange, values, errors, touched } = useFormikContext();
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
        {options?.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
      {fieldError && (fieldTouched === true) && <span className="text-red-700 text-xs font-medium mt-1 block">{fieldError}</span>}
    </div>
  );
};

export default Select;
