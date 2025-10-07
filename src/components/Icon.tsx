import iconsSprite from '../assets/images/icons-sprite.svg';

type IconPropsType = {
  iconId: string;
  size?: string;
  viewBox?: string;
};

const Icon = ({ iconId, size, viewBox }: IconPropsType) => {
  return (
    <svg
      width={size || '50'}
      height={size || '50'}
      viewBox={viewBox || '0 0 120 120'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  );
};

export default Icon;
