import React, { useEffect }  from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import Button from "../../uis/Button/Button";
 
let initstate;
 
const MemeForm = (props) => {
  useEffect(() => {
    initstate = props.meme;
  }, [])

  const SetStringStateFromInput = (evt) => {
    let newState={...props.meme};
    newState[evt.target.name]=evt.target.value;
    props.ChangeMeme(newState);
  }
  const SetNumberStateFromInput = (evt) => {
    let newState={...props.meme};
    newState[evt.target.name]=Number(evt.target.value);
    props.ChangeMeme(newState);
  }

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form onSubmit={(evt) => { evt.preventDefault();  }}  onReset={(evt) => {props.ChangeMeme(initstate)}}>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" value={props.meme.titre} onChange={SetStringStateFromInput} />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image" value={props.meme.imageId} onChange={(evt) => props.ChangeMeme({...props.meme, imageId:Number(evt.target.value)})}>
          <option value="-1">pas d'image</option>
          {props.images.map((image, index) => <option value={image.id} key={index} >{image.titre}</option>)}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" value={props.meme.text} onChange={SetStringStateFromInput} />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input className={styles.smallNumber} name="x" id="x" type="number" value={props.meme.x} onChange={SetNumberStateFromInput} />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input className={styles.smallNumber} name="y" id="y" type="number" value={props.meme.y} onChange={SetNumberStateFromInput} />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value={props.meme.color} onChange={SetStringStateFromInput}/>
        <br />
        <label htmlFor="fontSize">
          <h2 className={styles.inline}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize} onChange={SetNumberStateFromInput}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 className={styles.inline}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900" value={props.meme.fontWeight} onChange={SetStringStateFromInput}
        />
        <br />
        <input name="underline" id="underline" type="checkbox" checked={props.meme.underline} onChange={(evt) => props.ChangeMeme({...props.meme, underline:evt.target.checked})} />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={styles.inline}>underline</h2>
        </label>
        &nbsp;<h2 className={styles.inline}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 className={styles.inline}>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" checked={props.meme.italic} onChange={(evt) => props.ChangeMeme({...props.meme, italic:evt.target.checked})} />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 className={styles.inline}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={props.meme.frameSizeX} onChange={SetNumberStateFromInput}
        />
        px
        <label htmlFor="frameSizeY">
          <h2 className={styles.inline}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value={props.meme.frameSizeY} onChange={SetNumberStateFromInput}
        />
        px
        <br /><br/><hr/><br/>
        <Button type="submit" text="Valider" ColorClass="green" />
        <Button type="reset" text="Annuler"/>
      </form>
    </div>
  );
};

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  ChangeMeme: PropTypes.func.isRequired,
  images:PropTypes.array.isRequired,
};
MemeForm.defaultProps = {};

export default MemeForm;