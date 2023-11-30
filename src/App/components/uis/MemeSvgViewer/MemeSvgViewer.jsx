import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeSvgViewer.module.css";

const memeSvgViewerInitialState={};

const MemeSvgViewer = (props) => {
  const [state, setstate] = useState(memeSvgViewerInitialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  
  return (
    <div data-testid="MemeSvgViewer" className={styles.MemeSvgViewer}>
      MemeSvgViewer
    </div>
  );
};

MemeSvgViewer.propTypes = {};
MemeSvgViewer.defaultProp = {};

export default MemeSvgViewer;
