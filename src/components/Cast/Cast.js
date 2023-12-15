import { FetchCreditsById } from 'api';
import { ActorsGallery } from 'components/ActorList/ActorList';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieCast, setCast] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getCastByID() {
      try {
        setIsLoading(true);
        const CastByID = await FetchCreditsById(params.movieId);
        setCast(CastByID);
      } catch (error) {
        toast.error(`ERROR info about actors ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    getCastByID();
  }, [params.movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movieCast && <ActorsGallery movieCast={movieCast} />}
    </div>
  );
};
