import Alert from "react-bootstrap/Alert";

import React from "react";
import Button from "react-bootstrap/esm/Button";

const NotFound = (props) => {
  return (
    <>
      <Alert variant="danger">{props.message}</Alert>
      <Button>go homepage</Button>
    </>
  );
};

export default NotFound;
