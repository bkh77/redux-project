import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

function PosModal({ toggle, modal, handleSubmit, currentItem }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>
          Lavozim {currentItem ? "o'zgartirish" : "qo'shish"}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit} id="pos">
            <input
              defaultValue={currentItem.name}
              type="text"
              className="form-control mb-3"
              placeholder="Nomi..."
            />
            <input
              defaultValue={currentItem.salary}
              type="number"
              className="form-control "
              placeholder="Maosh..."
            />
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

export default PosModal;
