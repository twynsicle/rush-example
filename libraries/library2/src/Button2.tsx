import React from 'react';
import { createUseStyles } from 'react-jss';
import button2Styles from './button2.styles';

export interface Button2Props {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const useStyles = createUseStyles(button2Styles);

// trigger storybook

export const Button2 = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: Button2Props) => {
  const classes = useStyles();
  const mode = primary ? classes.primary : classes.secondary;

  return (
    <button
      type="button"
      className={[classes.button, classes[size], mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
