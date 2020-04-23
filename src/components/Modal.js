import React from 'react';

const Modal = (props) => {

    const { close, changeText } = props
    let { topText, bottomText } = props.state
    return ( 
        <div className="Modal">
            <i className="Modal__close fas fa-times"  aria-hidden="true" onClick={close}></i>
            <input type="text" className="Modal__input Modal__input--top" name="topText" placeholder="Top text" value={topText} onChange={changeText}/>
            <input type="text" className="Modal__input Modal__input--bottom" name="bottomText" placeholder="Bottom text" value={bottomText} onChange={changeText}/>
            <button className="Modal__btn">Download</button>
        </div>
     );
}
 
export default Modal;