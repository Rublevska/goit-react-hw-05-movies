import { Autor } from './RewiewList.styled';

export const RewiewList = ({ movieRewiews: { results } }) => {
  return (
    <div>
      {results.length === 0 ? (
        <p>We don`t have any rewiews for this movie</p>
      ) : (
        <ul>
          {results.map(info => {
            return (
              <li key={info.id}>
                <Autor>{info.author}</Autor>
                <p>{info.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
