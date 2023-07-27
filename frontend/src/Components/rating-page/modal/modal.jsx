import {React, useCallback} from "react";
import {useDropzone} from "react-dropzone";
import "./modal.css";
import TacoModalImage from "../images/tacoModalImage.jpg";

/**
 *  The Modal component
 * @return {component} the Modal component
 */
function Modal({open, onClose}) {
  if (!open) return null;

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

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (

    <div className="overlay" onClick={onClose} role="presentation">
      <div className="modalContainer">
        <div className="modalDottedLine">
          <div className="x-container">
            <p className="x" onClick={onClose} role="presentation">X</p>
          </div>
          <div className="taco-modal-image">
            <img className="taco-inside-modal"
              src={TacoModalImage}
              alt="taco modal"
            />
          </div>
          <div className="or-button-container">
            <div className="drag-drop-container" {...getInputProps()}>
              <p>Drag and drop photos here</p>
            </div>
            <div className="or">
              <p>or</p>
            </div>
            <div className="modal-button-container">
              <button
                className="modal-button"
                type="button"
              >
                Browse Files
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
