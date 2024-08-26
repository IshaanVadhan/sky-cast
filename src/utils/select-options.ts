import { StylesConfig } from "react-select";
import localities from "../../public/localities.json";

export const options: TLocation[] = localities.map((locality) => ({
  label: `${locality.localityName}, ${locality.cityName}`,
  value: locality,
}));

export const customStyles: StylesConfig<any, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#11192880",
    backdropFilter: "blur(2.5px)",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    padding: "0.25rem",
    color: "#fff",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#111928db",
    backdropFilter: "blur(2.5px)",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    overflow: "hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#ffffff1a" : "transparent",
    color: state.isSelected ? "#fff" : "#ccc",
    ":hover": {
      backgroundColor: "#ffffff1a",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  input: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#ccc",
  }),
};
