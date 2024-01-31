import React from "react";
import Select from "react-select";
import { languageOptions } from "@/constants/languageOptions";
// import { customStyles } from "../constants/customStyles";


const LanguagesDropdown = ({ onSelectChange }: { onSelectChange: (sl: any) => void}) => {
    return (
        <Select
            placeholder={`Filter By Category`}
            options={languageOptions}
            // styles={customStyles}
            defaultValue={languageOptions[0]}
            onChange={(selectedOption) => onSelectChange(selectedOption)}
        />
    )
};

export default LanguagesDropdown;