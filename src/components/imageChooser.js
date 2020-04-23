import React from 'react';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

const MemeChoser = (props) => {
    let number = 0
    const memes = props.list.map(meme => <img src={meme.meme} key={meme.id} alt="" className="MemeChooser__meme" onClick={() => props.click(meme.id)}/>)
    return ( 
        <div className="MemeChooser">
            <h1 className="MemeChooser__title">Choose your image</h1>
            {/* <div className="MemeChooser__memes"> */}
                
            {/* </div> */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="MemeChooser__memes"
                columnClassName="MemeChooser__column"
                >
                {memes}
            </Masonry>
        </div>
     );
}
 
export default MemeChoser;