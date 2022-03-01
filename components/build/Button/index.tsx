interface Props {
  onClick: () => void;
  label?: string;
}

const Button: React.FC<Props> = ({ onClick, label = 'Click' }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
