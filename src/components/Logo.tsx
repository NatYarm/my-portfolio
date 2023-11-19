type LogoPropsType = {
  logo: string;
};

const Logo = ({ logo }: LogoPropsType) => {
  return (
    <a href="/">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
