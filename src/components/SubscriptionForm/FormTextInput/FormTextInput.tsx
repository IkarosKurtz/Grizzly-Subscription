import "./FormTextInput.css"

interface FormTextInputProps {
  title: string
  placeholder: string
  type?: "number" | "text" | "email" | "password"
}

export function FormTextInput({
  title,
  placeholder,
  type = "text",
}: FormTextInputProps) {
  return (
    <div className="input-container">
      <p>{title}</p>
      <input
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
