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

const textStyle = {
  fontFamily: "Impact",
  textTransform: "uppercase",
  fill: "#FFF",
  stroke: "#000",
  userSelect: "none"
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
            <image className="Modal__meme-image" height="350px" transform="translate(-50%,-50%)" href={memesList[id].meme}/>
            {/* text on the top */}
            <text
                style={textStyle}
                x="50%"
                y="10%"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                  {topText}
              </text>
              {/* text on the bottom */}
              <text
                style={textStyle}
                x="50%"
                y="90%"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                  {bottomText}
              </text>
            
            </svg>
        </div>
     );
}
 
export default Modal;