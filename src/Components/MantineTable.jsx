import React, { useState } from "react";
import { Table } from "@mantine/core";
import Modal from "./Modal";
import data from "../Data/TableData";

const MantineTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleModal = (data) => {
    setModalData(data);
    setModalOpen(!modalOpen);
  };

  const rows = data.map((element) => (
    <tr key={element.userName}>
      <td>{element.userName}</td>
      <td>{element.location}</td>
      <td>{element.occupation}</td>
      <td className="last-element">
        {element.document.map((item) => (
          <div className="document">{item}</div>
        ))}
      </td>
      <td className="documents-menu">
        <button className="btn" onClick={() => handleModal(element.document)}>
          Documents
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <h1>Mantine Table</h1>
      <Table
        className="table"
        horizontalSpacing="sm"
        verticalSpacing="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          height: 300,
        })}
      >
        {modalOpen && <Modal list={modalData} onClose={handleModal} />}
        <thead>
          <tr>
            <th>User Name</th>
            <th>Location</th>
            <th>Occupation</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody className="body">{rows}</tbody>
      </Table>
    </>
  );
};

export default MantineTable;
