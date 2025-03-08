// base
import { FC, ReactNode } from "react";
import { Modal } from "antd";

interface IPropType {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  toggleModal: () => void;
  handleOk?: () => void;
}

const FullModal: FC<IPropType> = ({
  children,
  title,
  isOpen,
  toggleModal,
  handleOk,
}) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={toggleModal}
      onOk={handleOk}
      footer={false}
    >
      {children}
    </Modal>
  );
};

export { FullModal };
