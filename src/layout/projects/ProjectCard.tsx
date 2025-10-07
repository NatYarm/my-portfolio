import { FaGithub } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import FlexWrapper from '../../components/FlexWrapper';
import Link from '../../components/Link';
import { S } from './Projects_Styles';

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  techs: string;
  links: { demoLink: string; githubLink: string };
  imageType?: 'screenshot' | 'logo';
};

const ProjectCard = ({
  title,
  text,
  src,
  techs,
  links,
  imageType = 'screenshot',
}: ProjectPropsType) => {
  return (
    <S.ProjectCard>
      <S.Image src={src} alt={title} imageType={imageType}></S.Image>
      <S.ProjectDetails>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.TechStack>
          <b>Tech stack:</b> {techs}
        </S.TechStack>
        <FlexWrapper>
          <S.LinkWrapper>
            <HiLink style={S.iconStyles} />
            <Link
              href={links.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>demo</span>
            </Link>
          </S.LinkWrapper>

          <S.LinkWrapper>
            <FaGithub style={S.iconStyles} />
            <Link
              href={links.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>code</span>
            </Link>
          </S.LinkWrapper>
        </FlexWrapper>
      </S.ProjectDetails>
    </S.ProjectCard>
  );
};

export default ProjectCard;
