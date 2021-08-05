import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

function StaffModal({
  toggle,
  modal,
  handleSubmit,
  currentItem,
  positions,
  degrees,
}) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>
          Xodimlar {currentItem ? "o'zgartirish" : "qo'shish"}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit} id="pos">
            <input
              defaultValue={currentItem.firstName}
              type="text"
              className="form-control mb-3"
              placeholder="Ism..."
            />
            <input
              defaultValue={currentItem.lastName}
              type="text"
              className="form-control mb-3"
              placeholder="Familiya..."
            />
            <input
              defaultValue={currentItem.phone}
              type="number"
              className="form-control mb-3"
              placeholder="Telefon..."
            />

            <select
              className="form-select mb-3"
              defaultValue={currentItem.position}
            >
              {positions.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <select className="form-select" defaultValue={currentItem.degrees}>
              {degrees.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Chiqish
          </Button>{" "}
          <Button form="pos" type={"submit"} color="primary">
            Saqlash
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default StaffModal;
