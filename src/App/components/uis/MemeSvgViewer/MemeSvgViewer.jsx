import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeSvgViewer.module.css";
import { useSelector } from "react-redux";


const MemeSvgViewer = (props) => {
   
  return (
    <div data-testid="MemeSvgViewer" className={styles.MemeSvgViewer}>
      <svg viewBox={`0 0 ${props.image?props.image.w:"100"} ${props.image?props.image.h:"100"}`}>
        {undefined !== props.image && <image href={props.image.url} x="0" y="0" />}
        <text x={props.meme.x} y={props.meme.y} style={{
          fontSize:props.meme.fontSize,
          fontWeight:props.meme.fontWeight,
          textDecoration: props.meme.underline ? "underline":"none",
          fontStyle: props.meme.italic ? "italic":"normal", }} fill={props.meme.color}>{props.meme.text}</text>
      </svg>
    </div>
  );
};

MemeSvgViewer.propTypes = {
  meme:PropTypes.object.isRequired,
  image:PropTypes.shape({
    id:PropTypes.number.isRequired,
    url:PropTypes.string.isRequired,
    w:PropTypes.number.isRequired,
    h:PropTypes.number.isRequired,
    titre:PropTypes.string.isRequired
  })
};
MemeSvgViewer.defaultProp = {};

export default MemeSvgViewer;


export const MemeSvgViewerHookConnected = (props) => {
  const image = useSelector((s) => s.ressources.images.find(i=>i.id===s.current.imageId));
  const current = useSelector((s) => s.current);

  return (
    <MemeSvgViewer meme={current} image={image} />
  )
}

 // images.find(i => i.id === current.imageId)