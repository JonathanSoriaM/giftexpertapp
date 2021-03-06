import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
//import { getGifs } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({category}) => {

   /*
    useEffect ( () => {
      getGifs(category)
        .then( setImages);
    },[category])

 */

   const { data , loading} =  useFetchGifts(category);
 

  return (
      <>
        <h3>
            {category}
        </h3>
     
            {loading && <p>Loading....</p> }
            <div className='card-grid'>
                {
                data.map(img => (
                   <GiftGridItem
                    key = {img.id}
                    {...img}
                    />
                ))
}
                 </div>
        
    
        
   
      </>
  
  )
}
