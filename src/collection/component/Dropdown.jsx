"use client";

import { DropdownButton, Dropdown as BootstrapDropdown } from "react-bootstrap";

const Dropdown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sắp xếp" variant="light">
      <BootstrapDropdown.Item href="#/action-1">
        Giá: Tăng dần
      </BootstrapDropdown.Item>
      <BootstrapDropdown.Item href="#/action-2">
        Giá: Giảm dần
      </BootstrapDropdown.Item>
      <BootstrapDropdown.Item href="#/action-3">Cũ nhất</BootstrapDropdown.Item>
      <BootstrapDropdown.Item href="#/action-3">
        Mới nhất
      </BootstrapDropdown.Item>
    </DropdownButton>
  );
};
export default Dropdown;
