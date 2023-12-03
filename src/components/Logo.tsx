import { animateScroll as scroll } from 'react-scroll';

type LogoPropsType = {
  logo: string;
};

const Logo = ({ logo }: LogoPropsType) => {
  return (
    <button
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <img src={logo} alt="logo" />
    </button>
  );
};

export default Logo;
