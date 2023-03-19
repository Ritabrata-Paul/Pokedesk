import React,{useEffect} from 'react'
import { useAppDispatch } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import Wrapper from '../sections/Wrapper'

function Search() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  return (
    <div>
      Search
    </div>
  )
}

export default Wrapper(Search);
