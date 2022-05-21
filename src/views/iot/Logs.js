import React, { useState, useEffect } from "react";
import {
  CAvatar,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

const tableExample = [
  {
    deviceID: "ID",
    deviceIP: "IP",
    deviceName: "Name",
    sensor: "A",
    value: "B",
    time: "C",
  },
  {
    deviceID: "ID",
    deviceIP: "IP",
    deviceName: "Name",
    sensor: "A",
    value: "B",
    time: "C",
  },
  {
    deviceID: "ID",
    deviceIP: "IP",
    deviceName: "Name",
    sensor: "A",
    value: "B",
    time: "C",
  },
];

export default function Logs() {
  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell className="text-center">ID thiết bị</CTableHeaderCell>
          <CTableHeaderCell>Địa chỉ IP</CTableHeaderCell>
          <CTableHeaderCell className="text-center">Tên thiết bị</CTableHeaderCell>
          <CTableHeaderCell>Cảm biến</CTableHeaderCell>
          <CTableHeaderCell className="text-center">Giá trị</CTableHeaderCell>
          <CTableHeaderCell>Thời gian</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {tableExample.map((item, index) => (
          <CTableRow v-for="item in tableItems" key={index}>
            <CTableDataCell className="text-center">{item.deviceID}</CTableDataCell>
            <CTableDataCell>{item.deviceIP}</CTableDataCell>
            <CTableDataCell className="text-center">{item.deviceName}</CTableDataCell>
            <CTableDataCell>{item.sensor}</CTableDataCell>
            <CTableDataCell className="text-center">{item.value}</CTableDataCell>
            <CTableDataCell>{item.time}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
}
