import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import _ from "lodash";

function OffCanvas({ itemMenus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow} className="buttonOffcanvas px-0">
        <i className="ri-menu-line"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Escoge el de tu interes</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="itemOffcanvasmenu p-0">
            {_.map(itemMenus, (data) => {
              console.log(data);
              return (
                <li className="py-2" key={data.contentId}>
                  <a href={data.href}>{data.text}</a>
                </li>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
