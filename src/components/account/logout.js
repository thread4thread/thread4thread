/*
// code for logout 
import React from "react";
import { Modal } from "react-bootstrap";
import { signOut, getAuth } from "firebase/auth";


export default function LogOutModal(props) {
    const closeOut = () => {
        props.setShowLogOut(false);
    }
    // Logs user out
    const handleLogOut = () => {
        signOut(getAuth());
        closeOut();
    }

    return (
        <Modal show={props.show} id="signOutModal" >
            < Modal.Header >
                <Modal.Title>Log out?</Modal.Title>
            </Modal.Header >
            <form onSubmit={handleLogOut}>
                <Modal.Body>
                    This will log you out of thread4thread.
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-default">Log Out</button>
                    <button type="button" className="btn btn-default" onClick={closeOut}>Stay logged in</button>
                </Modal.Footer>
            </form>
        </Modal >
    )
}
*/ 