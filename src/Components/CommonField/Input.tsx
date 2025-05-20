import { useFormikContext, getIn } from "formik";
import React, { useCallback, useState } from "react";
import classNames from "classnames";
import { AccessTimeFilledOutlined, Visibility, VisibilityOffOutlined } from "@mui/icons-material";

interface IInput {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  inputClass?: string;
  labelClass?: string;
  disabled?: boolean;
}

const Input: React.FC<IInput> = ({
  name,
  label,
  type = "text",
  placeholder,
  inputClass,
  labelClass,
  disabled = false,
}) => {
  const { handleBlur, handleChange, values, errors, touched } = useFormikContext<{ [key: string]: any }>();

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordVisibility = useCallback(() => {
    setIsPasswordShow(!isPasswordShow);
  }, [isPasswordShow]);

  let fieldValue = getIn(values, name, "");
  const fieldError = getIn(errors, name);
  const fieldTouched = getIn(touched, name);

  if (type === "date" && fieldValue) {
    fieldValue = new Date(fieldValue).toISOString().split("T")[0];
  }

  return (
    <div>
      {!!label && <label className={classNames("text-[15px] text-text1 mb-1 inline-block font-medium", labelClass)}>{label}</label>}
      <div className="relative">
        {type === "time" ?
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 cursor-pointer pointer-events-none">
            <AccessTimeFilledOutlined className="text-gray-600 !text-2xl" />
          </div> : ""
        }
        <input
          disabled={disabled}
          onChange={(e) => {
              handleChange(e);
          }}
          onBlur={handleBlur}
          type={type !== "password" ? type : isPasswordShow ? "text" : "password"}
          name={name}
          className={classNames(
            `${type === "password" ? "pr-10 pl-3" : "px-3"} ${disabled ? "bg-gray-100" : ""} py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md`,
            fieldError && fieldTouched ? "border-red-700" : "border-border1",
            inputClass
          )}
          placeholder={placeholder}
          value={fieldValue}
        />
        {type === "password" && (
          <span className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B8B]" onClick={handlePasswordVisibility}>
            {isPasswordShow ? <Visibility className="!text-xl" /> : <VisibilityOffOutlined className="!text-xl" />}
          </span>
        )}
      </div>
      {fieldError && (fieldTouched === true) && <span className="text-red-700 text-xs font-medium mt-1 block">{fieldError}</span>}
    </div>
  );
};

export default Input;
