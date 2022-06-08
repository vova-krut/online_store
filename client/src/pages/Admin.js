import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState();
    const [typeVisible, setTypeVisible] = useState();
    const [deviceVisible, setDeviceVisible] = useState();
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Add type
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Add brand
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Add device
            </Button>
            <CreateType
                show={typeVisible}
                onHide={() => setTypeVisible(false)}
            />
            <CreateBrand
                show={brandVisible}
                onHide={() => setBrandVisible(false)}
            />
            <CreateDevice
                show={deviceVisible}
                onHide={() => setDeviceVisible(false)}
            />
        </Container>
    );
};

export default Admin;
