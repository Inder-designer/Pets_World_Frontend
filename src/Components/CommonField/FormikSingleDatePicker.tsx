import React from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { useFormikContext, getIn } from "formik";
import { formatDate, formatDateRange } from "../../utils/common";

type DateRange = { start: string; end: string };

type FormikDatePickerProps = {
    name: string;
    label?: string;
    enableTime?: boolean;
    dateFormat?: string;
    placeholder?: string;
    classes?: string;
    isRange?: boolean;
    availabilityWindow?: { startDate: string; endDate: string };
    bookedRanges?: DateRange[];
};

const FormikDatePicker: React.FC<FormikDatePickerProps> = ({
    name,
    label,
    enableTime = false,
    dateFormat = "d M, Y",
    placeholder = "Select a date",
    classes = "",
    isRange = false,
    availabilityWindow,
    bookedRanges = [],
}) => {
    const { values, setFieldValue, errors, touched } = useFormikContext()
    const fieldValue = getIn(values, name, "");
    const fieldError = getIn(errors, name);
    const fieldTouched = getIn(touched, name);

    const lockStartValue = availabilityWindow &&
        Array.isArray(fieldValue) &&
        fieldValue.length === 2 &&
        new Date(fieldValue[0]) < new Date(availabilityWindow.startDate) &&
        new Date(fieldValue[1]) >= new Date(availabilityWindow.startDate) &&
        new Date(fieldValue[1]) <= new Date(availabilityWindow.endDate);

    const today = new Date();

    const disableBefore = lockStartValue ? new Date(new Date(fieldValue[0]).setDate(new Date(fieldValue[0]).getDate() - 1)) : (
        availabilityWindow?.startDate ? new Date(availabilityWindow.startDate) : today
    )

    const disableAfter = availabilityWindow?.endDate
        ? new Date(availabilityWindow.endDate)
        : null;

    const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

    const isInRange = (date: Date, from: Date, to: Date) => formatDate(date, "YYYY-MM-DD") > formatDate(from, "YYYY-MM-DD") && formatDate(date, "YYYY-MM-DD") < formatDate(to, "YYYY-MM-DD");

    const disabledFn = (date: Date) => {
        if (disableBefore && date < disableBefore) return true;
        if (disableAfter && date > disableAfter) return true;

        for (const range of bookedRanges) {
            const start = new Date(range.start);
            const end = new Date(range.end);

            if (isInRange(date, start, end)) {
                return true;
            }
        }

        const isCheckout = bookedRanges.some(range => isSameDay(date, new Date(range.end)));
        const isCheckin = bookedRanges.some(range => isSameDay(date, new Date(range.start)));

        if (isCheckout && isCheckin) {
            return true;
        }

        return false;
    };


    return (
        <div>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium mb-2">
                    {label}
                </label>
            )}
            <div className="relative border border-border1 py-2 px-3 rounded-md ">
                <Flatpickr
                    options={{
                        enableTime,
                        dateFormat,
                        disable: [disabledFn],
                        mode: isRange ? "range" : "single",
                        onDayCreate: (_, __, ___, dayElem) => {
                            const elem = dayElem as HTMLElement & { dateObj: Date };
                            if (lockStartValue) {
                                if (elem.dateObj < new Date(availabilityWindow?.startDate)) {
                                    elem.classList.add("flatpickr-disabled");
                                    elem.setAttribute("title", "Not selectable");
                                }
                            }
                            bookedRanges.forEach((range) => {
                                const start = new Date(range.start);
                                const end = new Date(range.end);

                                if (isSameDay(elem.dateObj, start)) {
                                    elem.setAttribute("title", "Only Checkout");
                                }

                                if (isSameDay(elem.dateObj, end)) {
                                    elem.setAttribute("title", "Only Checkin");
                                }
                            });
                        },
                    }}
                    value={fieldValue}
                    onChange={(selectedDates) => {
                        // if (selectedDates.length === 1) return;
                        if (lockStartValue && Array.isArray(fieldValue) && fieldValue.length > 0) {
                            const currentStart = fieldValue[0];
                            selectedDates[0] = currentStart;
                        }
                        setFieldValue(name, selectedDates);
                    }}
                    className={`text-text1 placeholder:text-text3  w-full rounded-md absolute opacity-0 top-0 left-0 h-full ${classes} `}
                    placeholder={placeholder}
                />
                <p className={`text-text1 placeholder:text-text3 w-full rounded-md ${classes}`}>{formatDateRange(fieldValue)}</p>
            </div>
            {fieldError && fieldTouched && (
                <span className="text-red-700 text-xs mt-1 block">{fieldError}</span> // Display error message
            )}
        </div>
    );
};

export default FormikDatePicker;
