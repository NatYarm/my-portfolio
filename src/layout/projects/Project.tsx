import { FaGithub } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import FlexWrapper from '../../components/FlexWrapper';
import Link from '../../components/Link';
import { S } from './Projects_Styles_v2';

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  techs: string;
  index: number;
};

const Project = ({ title, text, src, techs, index }: ProjectPropsType) => {
  return (
    <S.Project index={index}>
      <S.Image src={src} alt={title} index={index}></S.Image>
      <S.ProjectDetails>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.TechStack>
          <b>Tech stack:</b> HTML, CSS, {techs}
        </S.TechStack>
        <FlexWrapper>
          <S.LinkWrapper>
            <HiLink style={S.iconStyles} />
            <Link href="#">
              <span>demo</span>
            </Link>
          </S.LinkWrapper>

          <S.LinkWrapper>
            <FaGithub style={S.iconStyles} />
            <Link href="#">
              <span>code</span>
            </Link>
          </S.LinkWrapper>
        </FlexWrapper>
      </S.ProjectDetails>
    </S.Project>
  );
};

export default Project;
