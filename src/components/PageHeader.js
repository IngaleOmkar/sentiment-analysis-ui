import { useState } from 'react';
import Fade from 'react-bootstrap/Fade';

function PageHeader() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Fade in={open}>
        <div id="example-fade-text">
            Welcome to the Sentiment Analysis App
        </div>
      </Fade>
    </>
  );
}

export default PageHeader;