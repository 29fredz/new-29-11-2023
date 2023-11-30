import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";

const memeFormInitialState={};

const MemeForm = (props) => {
  const [state, setstate] = useState(memeFormInitialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      MemeForm
    </div>
  );
};

MemeForm.propTypes = {};
MemeForm.defaultProp = {};

export default MemeForm;
