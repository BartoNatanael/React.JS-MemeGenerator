import React from 'react';
const convertSvgToImage = () => {
        const svg = document.querySelector(".Modal__meme");
        let svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvas");
        const svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
        img.onload = function() {
          canvas.getContext("2d").drawImage(img, 0, 0);
          const canvasdata = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          a.download = "meme.png";
          a.href = canvasdata;
          document.body.appendChild(a);
          a.click();
        };
      }
const Modal = (props) => {

    const { close, changeText, memesList } = props
    let { topText, bottomText, id } = props.state

    

    return ( 
        <div className="Modal">
            {/* close icon */}
            <i className="Modal__close fas fa-times"  aria-hidden="true" onClick={close}></i>
            {/* form with Download btn */}
            <input type="text" className="Modal__input Modal__input--top" name="topText" placeholder="Top text" value={topText} onChange={changeText}/>
            <input type="text" className="Modal__input Modal__input--bottom" name="bottomText" placeholder="Bottom text" value={bottomText} onChange={changeText}/>
            <button className="Modal__btn" onClick={convertSvgToImage}>Download</button>
            {/* meme */}
            <svg className="Modal__meme" width="500px" height="350px">
            
            <image  height="350px" href={memesList[id].meme}/>
            <text
                // style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
                x="250"
                y="25"
                dominantBaseline="middle"
                textAnchor="middle"
                // onMouseDown={event => this.handleMouseDown(event, 'top')}
                // onMouseUp={event => this.handleMouseUp(event, 'top')}
              >
                  {topText}
              </text>
              <text
                // style={textStyle}
                dominantBaseline="middle"
                textAnchor="middle"
                x="250"
                y="325"
                // onMouseDown={event => this.handleMouseDown(event, 'bottom')}
                // onMouseUp={event => this.handleMouseUp(event, 'bottom')}
              >
                  {bottomText}
              </text>
            
            </svg>
        </div>
     );
}
 
export default Modal;