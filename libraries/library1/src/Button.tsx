import React from 'react';
// import { createUseStyles } from 'react-jss';
// import buttonStyles from './button.styles';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

// const useStyles = createUseStyles(buttonStyles);

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // const classes = useStyles();
  // const mode = primary ? classes.primary : classes.secondary;

  return (
    <button
      type="button"
      // className={[classes.button, classes[size], mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
