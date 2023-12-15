import { ActorImage, ActorWrap, ActorDiscr } from './Actor.styled';

export const Actor = ({ info: { profile_path, name, character } }) => {
  return (
    <ActorWrap>
      <ActorImage
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : 'https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg'
        }
        alt={name}
      />
      <ActorDiscr>
        <p>
          <b>{character}</b>
        </p>
        <p>{name}</p>
      </ActorDiscr>
    </ActorWrap>
  );
};
