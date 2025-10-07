import styled from 'styled-components';
import photo from '../../assets/images/profile-img.jpg';
import PhotoDecor from './PhotoDecor';

const MainPhoto = () => {
  return (
    <PhotoDecor rotationDeg="120deg">
      <PhotoDecor rotationDeg="135deg">
        <PhotoDecor rotationDeg="165deg">
          <PhotoDecor rotationDeg="150deg">
            <PhotoDecor rotationDeg="105deg">
              <Photo src={photo} alt="Natalia" />
            </PhotoDecor>
          </PhotoDecor>
        </PhotoDecor>
      </PhotoDecor>
    </PhotoDecor>
  );
};

const Photo = styled.img`
  height: 35rem;
  border-radius: 50%;
  border: 10px solid transparent;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.8);
  background: rgb(231, 15, 170);
  background: linear-gradient(
      49deg,
      rgba(231, 15, 170, 1) 10%,
      rgba(0, 192, 253, 1) 100%
    )
    border-box;
`;

export default MainPhoto;
