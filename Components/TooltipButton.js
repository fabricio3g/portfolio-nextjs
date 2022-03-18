import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
const TooltipButton = ({ children, title }) => {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 100, hide: 100 }}
      overlay={<Tooltip id="button-tooltip-2">{title}</Tooltip>}
    >
      <Button
        className="bg-transparent p-0 border-0"
        style={{ background: "#262730" }}
      >
        {children}
      </Button>
    </OverlayTrigger>
  );
};

export default TooltipButton;
