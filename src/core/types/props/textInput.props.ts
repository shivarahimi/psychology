export interface ITextInputProps {
  name: string;
  onChange?: (val: string | number) => void;
  setToFormik?: boolean;
  placeholder?: string;
}
