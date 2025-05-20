import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classNames from 'classnames';
import { getIn, useFormikContext } from "formik";

interface PhoneInputProps {
    label?: string;
    name: string;
    labelClass?: string;
    defaultCountry?: string;
    errorMessage?: string;
    disabled?: boolean;
}

const PhoneFormikInput: React.FC<PhoneInputProps> = ({
    label,
    name,
    defaultCountry = "in",
    labelClass,
    disabled = false,
}) => {
    const { values, setFieldValue, errors, touched } = useFormikContext<{ [key: string]: any }>();

    let fieldValue = getIn(values, name, "");

    return (
        <div className="phoneInput relative">
            {!!label && <label className={classNames("text-[15px] text-text1 mb-1 inline-block font-medium", labelClass)}>{label}</label>}
            <div className="w-full" >
                <PhoneInput
                    inputStyle={{
                        fontFamily: "Poppins",
                        width: "100%",
                        borderRadius: "6px",
                        height: "41px",
                        borderColor: "#C3C3C3",
                        backgroundColor: disabled ? "#f7fafc" : "",
                        paddingRight: "32px"
                    }}
                    value={fieldValue}
                    country={defaultCountry}
                    placeholder="Enter phone number"
                    disabled={disabled}
                    onChange={(value: string | undefined,) => {
                        if (value === "+" || value === "" || (value && /^\d{1,3}$/.test(value))) {
                            setFieldValue(name, "");
                        } else {
                            setFieldValue(name, value?.startsWith("+") ? value : `+${value}`)
                        }
                    }}
                />
            </div>
            {errors[name] && touched[name] && typeof errors[name] === 'string' && (
                <span className="text-red-700 text-xs font-medium mt-1 block">{errors[name]}</span>
            )}
        </div>
    );
};

export default PhoneFormikInput;
