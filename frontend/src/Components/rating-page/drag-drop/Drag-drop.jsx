/* eslint-disable no-unused-vars */
import {React, useMemo, useCallback} from "react";
import {useDropzone} from "react-dropzone";


// eslint-disable-next-line valid-jsdoc
/**
 *  The Modal component
 * @return {component} the Modal component
 */
function Drag(props) {
  if (!props.openModal) return null;

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);


  const {
    getRootProps,
    getInputProps,
    // eslint-disable-next-line no-unused-vars
    isFocused,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({onDrop, accept: "image/*", noClick: true, noKeyboard: true});


  return (
    <div className="overlay" onClick={props.onClose} role="presentation">
      <div className="drag-drop-container">

        <div {...getRootProps({
          className: "container-dotted",
        },
        )}>
          <input {...getInputProps()} />
          <div {...getRootProps({
            className: "button-container",
          })}>
            <p>Drag and drop photos here</p>
            <button type="button" {...getRootProps({
              onClick: open,
            })}>
        Browse Files
            </button>
          </div>
          <p {...getRootProps({
            className: "X-container",
            onClick: props.onClose,
            role: "presentation",
          })}>X</p>
        </div>
      </div>
    </div>
  );
}

export default Drag;
