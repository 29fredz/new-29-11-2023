import React from 'react'
import MemeSvgViewerConnected from './MemeSvgViewer'
import { useSelector } from "react-redux";

export const MemeSvgViewer = (props) => {
    const image = useSelector((s) => s.ressources.images.find(i=>i.id===s.current.imageId));
    const current = useSelector((s) => s.current);
  
    return (
      <MemeSvgViewerConnected meme={current} image={image} />
    )
  }
  
export default MemeSvgViewer
