import React from "react";

export const Modal = ({ show, setShow, selectedCell = {} }) => {
    console.log(selectedCell);
    return (
        <>
            {show && <div classNameName="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{selectedCell.name} - {selectedCell.id}</h5>
                            <button type="button" className="close" onClick={() => setShow(!show)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Distance: {Math.floor(selectedCell.distance)}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShow(!show)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}