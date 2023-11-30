import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";

const templateNameInitialState={};

const TemplateName = (props) => {
  const [state, setstate] = useState(templateNameInitialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  
  return (
    <div data-testid="TemplateName" className={styles.TemplateName}>
      TemplateName
    </div>
  );
};

TemplateName.propTypes = {};
TemplateName.defaultProp = {};

export default TemplateName;
