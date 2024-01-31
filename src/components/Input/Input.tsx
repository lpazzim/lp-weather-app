import { styled } from "@linaria/react";

type InputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  type?: "text" | "password" | "email" | "number";
  appearance?: "default" | "error" | "success" | "warning";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.1rem;
  display: flex;
  color: var(--color-text);
`;

export const Input = ({
  label = "",
  placeholder = "",
  value,
  type = "text",
  onChange,
}: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </Container>
  );
};
