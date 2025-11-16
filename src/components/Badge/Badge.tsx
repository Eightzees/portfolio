import './Badge.scss';

import classnames from 'classnames';

import type { ColorType } from '../../lib/constants';

export interface BadgeProps {
  color?: ColorType;
  isInverted?: boolean;
  text: string;
  additionalClassName?: string;
}

const Badge: React.FC<BadgeProps> = ({ color = 'blue', isInverted = false, text, additionalClassName }) => {
  const classNames = classnames({
    Badge: true,
    [`Badge--inverted`]: isInverted,
    [`Badge--${color}`]: color,
    [`${additionalClassName}`]: additionalClassName,
  });

  return (
    <div className={classNames}>
      <span>{text}</span>
    </div>
  );
};

export default Badge;
