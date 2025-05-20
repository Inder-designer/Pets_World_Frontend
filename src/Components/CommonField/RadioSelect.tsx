import { getIn, useFormikContext } from "formik";

type option = {
    label: string;
    value: string | number;
    note?: string
};


interface IRadioSelect {
    name: string,
    label: string,
    options: option[],
    disabled?: boolean,
    labelClass?: string
}

const RadioSelect: React.FC<IRadioSelect> = ({
    name,
    label,
    options = [],
    disabled = false,
    labelClass = "",
}) => {
    const { setFieldValue, values, errors, touched } = useFormikContext();
    const fieldValue = getIn(values, name, "");
    const fieldError = getIn(errors, name);
    const fieldTouched = getIn(touched, name);

    return (
        <div>
            {label && (
                <label className={`text-[15px] text-text1 mb-2 block font-medium ${labelClass}`}>
                    {label}
                </label>
            )}
            <div className="grid grid-cols-3 gap-3">
                {options.map((option, index) => (
                    <label
                        key={index}
                        className={`flex items-start gap-2 cursor-pointer p-3 border rounded-md ${fieldValue === option.value
                            ? "bg-primary text-white"
                            : "border-border1 bg-white"
                            } flex-1`}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={fieldValue}
                            checked={fieldValue === option.value}
                            onChange={() => setFieldValue(name, option.value)}
                            disabled={disabled}
                            className="mt-1 hidden"
                        />
                        <div>
                            <p className={`text-sm font-medium text-text1 ${fieldValue === option.value
                                ? "text-white"
                                : ""
                                }`}>{option.label}</p>
                            {option.note && (
                                <p className={`text-xs mt-1 ${fieldValue === option.value
                                    ? "text-[#fff] opacity-90"
                                    : "text-text3"
                                    }`}>{option.note}</p>
                            )}
                        </div>
                    </label>
                ))}
            </div>
            {fieldError && fieldTouched && <span className="text-red-700 text-xs font-medium mt-1 block">{fieldError}</span>}
        </div>
    );
};

export default RadioSelect