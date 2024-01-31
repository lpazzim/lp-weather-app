import { styled } from "@linaria/react";

type ButtonProps = {
  children?: React.ReactNode;
  label: string;
  onClick: () => void;
};

const ButtonField = styled.button`
  background-color: var(--color-primary);
  color: var(--color-text);
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  height: 38px;
  justify-content: center;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export const Button = ({ children, label, onClick }: ButtonProps) => {
  return (
    <ButtonField onClick={onClick}>
      {children}
      {label}
    </ButtonField>
  );
};
