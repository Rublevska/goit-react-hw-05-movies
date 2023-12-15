import { FetchRewiewsById } from 'api';
import { Loader } from 'components/Loader/Loader';
import { RewiewList } from 'components/RewiewList/RewiewList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const Rewiews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieRewiews, setRewiews] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getRewiewsByID() {
      try {
        setIsLoading(true);
        const RewiewsByID = await FetchRewiewsById(params.movieId);
        setRewiews(RewiewsByID);
      } catch (error) {
        toast.error(`ERROR info about actors ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    getRewiewsByID();
  }, [params.movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movieRewiews && <RewiewList movieRewiews={movieRewiews} />}
    </div>
  );
};
