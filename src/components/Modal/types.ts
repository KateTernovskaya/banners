import React from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[];
  icon: () => React.JSX.Element;
};
