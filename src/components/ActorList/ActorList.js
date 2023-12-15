import { Actor } from 'components/Actor/Actor';

export const ActorsGallery = ({ movieCast: { cast } }) => {
  return (
    <ul>
      {cast.map(actorInfo => {
        return (
          <li key={actorInfo.id}>
            <Actor info={actorInfo} />
          </li>
        );
      })}
    </ul>
  );
};
