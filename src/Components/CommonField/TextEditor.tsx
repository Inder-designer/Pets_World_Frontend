import classNames from "classnames";
import { getIn, useFormikContext } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface ITextEditor {
    name: string;
    label?: string;
    inputClass?: string;
    labelClass?: string;
    placeholder?: string;
}

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link"],
    ],
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "script",
    "indent",
    "color",
    "background",
    "align",
    "link",
];

const TextEditor: React.FC<ITextEditor> = ({ name, placeholder, label, labelClass }) => {
    const { values, setFieldValue, errors, touched, setFieldTouched } = useFormikContext<{ [key: string]: any }>();

    const fieldError = getIn(errors, name);
    const fieldTouched = getIn(touched, name);

    return (
        <div>
            {!!label && <label className={classNames("text-[15px] text-text1 mb-1 inline-block font-medium", labelClass)}>{label}</label>}
            <ReactQuill
                // ref={quillRef}
                className="bg-white h-full rounded"
                theme="snow"
                value={getIn(values, name, "") || ""}
                onChange={(content) => { if (content === "<p><br></p>") { setFieldValue(name, ""); return } setFieldValue(name, content) }}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
                onBlur={() => setFieldTouched(name, true)}

            />
            {fieldError && fieldTouched && <span className="text-red-700 text-xs font-medium mt-1 block">{fieldError}</span>}
            {/* {errors[name] && (touched[name] === undefined || touched[name] === true) && <span className="text-red-700 text-xs font-medium mt-1 block">{String(errors[name])}</span>} */}
        </div>
    )
}

export default TextEditor