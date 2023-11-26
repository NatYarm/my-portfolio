import Icon from '../../components/Icon';
import FlexWrapper from '../../components/FlexWrapper';
import { S } from './Projects_Styles';

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  techs: string;
};

const Project = ({ title, text, src, techs }: ProjectPropsType) => {
  return (
    <S.Project>
      <S.Image src={src} alt={title}></S.Image>
      <S.ProjectDetails>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.TechStack>
          <b>Tech stack:</b> HTML, CSS, {techs}
        </S.TechStack>
        <FlexWrapper>
          <S.Link href="#">
            <FlexWrapper align="center">
              <Icon iconId="link" size="18px" viewBox="0 0 24 24" />
              <S.LinkText>demo</S.LinkText>
            </FlexWrapper>
          </S.Link>

          <S.Link href="#">
            <FlexWrapper align="center">
              <Icon iconId="github-repo" size="16px" viewBox="0 0 24 24" />
              <S.LinkText>code</S.LinkText>
            </FlexWrapper>
          </S.Link>
        </FlexWrapper>
      </S.ProjectDetails>
    </S.Project>
  );
};

export default Project;
