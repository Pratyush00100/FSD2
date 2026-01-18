import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  );
}
