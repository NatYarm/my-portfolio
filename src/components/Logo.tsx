import logo from '../assets/images/logo.png';
import Icon from './Icon';

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="logo" />
      {/* <Icon iconId="logo" /> */}
    </a>
  );
};

export default Logo;
