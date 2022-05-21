import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Switch from "@mui/material/Switch";

export default function Main() {
  return (
    <div className="border border-info w-50">
      <div className="bg-white fw-bold text-center"> Điều khiển thiết bị</div>
      <div className="row m-3 border border-info">
        <div className="col-4">
          <div>Nhiệt độ</div>
          <div>30&deg;C</div>
        </div>
        <div className="col-4">
          <div>Độ ẩm</div>
          <div>50%</div>
        </div>
        <div className="col-4">
          <div>Ánh sáng</div>
          <div>350lux</div>
        </div>
      </div>
      <div className="row m-3 border border-info">
        <div className="row">
          <div>Các thiết bị</div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                Đèn 1
                <Switch defaultChecked />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="mr-2">
              Đèn 2 <Switch defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
