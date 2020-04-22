import React from 'react';



const MemeChoser = (props) => {
    let number = 0
    const memes = props.list.map(meme => <img src={meme.meme} key={meme.id} alt="" className="MemeChooser__meme" onClick={() => props.click(meme.id)}/>)
    return ( 
        <div className="MemeChooser">
            <h1 className="MemeChooser__title">Choose your image</h1>
            <div className="MemeChooser__memes">
                {memes}
            </div>
        </div>
     );
}
 
export default MemeChoser;