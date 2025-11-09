import './Badge.scss';

import classnames from 'classnames';

import type { ColorType } from '../../lib/constants';

export interface BadgeProps {
  color?: ColorType;
  text: string;
  additionalClassName?: string;
}

const Badge: React.FC<BadgeProps> = ({ color = 'blue', text, additionalClassName }) => {
  const classNames = classnames({
    Badge: true,
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
