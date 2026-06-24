export type ButtonProps = {
  isLink?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  text?: string;
};
