import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";

const CreateType = ({ show, onHide }) => {
    const [type, setType] = useState("");

    const addType = () => {
        try {
            createType({ name: type }).then((data) => {
                setType("");
                onHide();
            });
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Enter the name of a type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={addType}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
