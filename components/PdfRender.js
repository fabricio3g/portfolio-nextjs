import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BiDownArrowAlt } from "react-icons/bi";

const PdfRender = ({ url }) => {
  function _arrayBufferToBase64(buffer) {
    // Thanks to:
    // https://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
        url
    )
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const base64 = _arrayBufferToBase64(data);
        setPdf(base64);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <b>Loading...</b>
      ) : (
        <Container className="p-2 border rounded">
          <iframe
            title="frame"
            width="100%"
            height="700px"
            src={`data:application/pdf;base64,${pdf}`}
          />
        </Container>
      )}
    </>
  );
};

export default PdfRender
