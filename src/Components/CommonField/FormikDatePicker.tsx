import React, { useCallback } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { useFormikContext, getIn } from "formik";
import { formatDate } from "../../utils/common";

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

  const disableBefore = availabilityWindow?.startDate ? new Date(availabilityWindow.startDate) : today
  const disableAfter = availabilityWindow?.endDate ? new Date(availabilityWindow.endDate) : null;

  const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();
  const isInRange = (date: Date, from: Date, to: Date) => formatDate(date, "YYYY-MM-DD") > formatDate(from, "YYYY-MM-DD") && formatDate(date, "YYYY-MM-DD") < formatDate(to, "YYYY-MM-DD");

  const disabledStartFn = (date: Date) => {
    if (disableBefore && date < disableBefore) return true;
    if (disableAfter && date > disableAfter) return true;

    // Disable if date falls within any booked range
    for (const range of bookedRanges) {
      const start = new Date(range.start);
      const end = new Date(range.end);

      if (isInRange(date, start, end)) return true;
    }

    return false;
  };

  const disabledEndFn = useCallback((date: Date) => {
    console.log("Disabled End Date Callback");

    const startDate = fieldValue?.[0] ? new Date(fieldValue[0]) : null;
    if (!startDate) return true;

    if (disableBefore) {
      const effectiveMinDate = startDate > disableBefore ? startDate : disableBefore;
      if (date <= effectiveMinDate) return true;
    }
    if (disableAfter && date > disableAfter) return true;

    const futureBooked = bookedRanges
      .map(range => ({ start: new Date(range.start) }))
      .filter(range => range.start > startDate)
      .sort((a, b) => a.start.getTime() - b.start.getTime());

    const nearestBlockedStart = futureBooked.length ? futureBooked[0].start : null;

    if (nearestBlockedStart && date >= nearestBlockedStart) return true;

    return false;
  }, [fieldValue[0]]);


  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <div className="flex gap-4">
        {/* Start Date Picker */}
        <div className={`${lockStartValue ? "bg-gray-200" : ""} relative border border-border1 py-2 px-3 rounded-md flex-1`}>
          <Flatpickr
            options={{
              enableTime,
              dateFormat,
              disable: [disabledStartFn],
              mode: "single",
              onDayCreate: (_, __, ___, dayElem) => {
                const elem = dayElem as HTMLElement & { dateObj: Date };
                bookedRanges.forEach((range) => {
                  if (isSameDay(elem.dateObj, new Date(range.start))) {
                    elem.classList.add("flatpickr-disabled");
                    elem.setAttribute("title", "Only Checkout");
                  }
                  if (isSameDay(elem.dateObj, new Date(range.end))) {
                    elem.setAttribute("title", "Only Checkin");
                  }
                });
              },
            }}
            onChange={(selectedDates) => {
              const updated = [...fieldValue];
              updated[0] = selectedDates[0];

              const selectedStart = new Date(selectedDates[0]);
              const currentEnd = fieldValue[1] ? new Date(fieldValue[1]) : null;

              if (currentEnd && currentEnd <= selectedStart) {
                const nextDay = new Date(selectedStart);
                nextDay.setDate(nextDay.getDate() + 1);
                updated[1] = nextDay;
              }

              setFieldValue(name, updated);
            }}
            disabled={!!lockStartValue}
            className={`text-text1 placeholder:text-text3 w-full rounded-md absolute opacity-0 top-0 left-0 h-full ${classes}`}
            placeholder={placeholder}
          />
          <p className={`text-text1 placeholder:text-text3 w-full rounded-md ${classes}`}>
            {formatDate(fieldValue[0], "DD-MM-YYYY")}
          </p>
        </div>

        {/* End Date Picker */}
        <div className="relative border border-border1 py-2 px-3 rounded-md flex-1">
          <Flatpickr
            key={fieldValue[0]?.toISOString() || "default"}
            options={{
              enableTime,
              dateFormat,
              disable: [disabledEndFn],
              mode: "single",
              onDayCreate: (_, __, ___, dayElem) => {
                const elem = dayElem as HTMLElement & { dateObj: Date };
                bookedRanges.forEach((range) => {
                  if (isSameDay(elem.dateObj, new Date(range.start))) {
                    elem.setAttribute("title", "Only Checkout");
                  }
                  if (isSameDay(elem.dateObj, new Date(range.end))) {
                    elem.classList.add("flatpickr-disabled");
                    elem.setAttribute("title", "Only Checkin");
                  }
                });
              },
            }}
            value={fieldValue[1]}
            onChange={(selectedDates) => {
              const updated = [...fieldValue];
              updated[1] = selectedDates[0];
              setFieldValue(name, updated);
            }}
            className={`text-text1 placeholder:text-text3 w-full rounded-md absolute opacity-0 top-0 left-0 h-full ${classes}`}
            placeholder={placeholder}
          />
          <p className={`text-text1 placeholder:text-text3 w-full rounded-md ${classes}`}>
            {formatDate(fieldValue[1], "DD-MM-YYYY")}
          </p>
        </div>
      </div>
      {fieldError && fieldTouched && (
        <span className="text-red-700 text-xs mt-1 block">{fieldError}</span> // Display error message
      )}
    </div>
  );
};

export default FormikDatePicker;
