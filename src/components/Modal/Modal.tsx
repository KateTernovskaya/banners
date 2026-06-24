import React, { useEffect } from 'react';
import styles from './Modal.module.scss';
import { ModalProps } from './types';
import Button from '../../shared/ui/Button';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, title, content, icon: Icon }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderContent = () => {
    return content.map((line, idx) => {
      if (
        line.startsWith('•') ||
        line.startsWith('—') ||
        line.startsWith('✓')
      ) {
        const symbol = line.charAt(0);
        const text = line.slice(1).trim();
        let className = '';
        if (symbol === '•') className = styles.bullet;
        else if (symbol === '—') className = styles.dash;
        else if (symbol === '✓') className = styles.check;

        return (
          <li key={idx} className={className}>
            {text}
          </li>
        );
      }
      if (line.endsWith(':')) {
        return (
          <h4 key={idx} className={styles.subtitle}>
            {line}
          </h4>
        );
      }
      return (
        <p key={idx} className={styles.paragraph}>
          {line}
        </p>
      );
    });
  };

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <Icon />
          </div>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.textContent}>{renderContent()}</div>
          <Button isLink />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
