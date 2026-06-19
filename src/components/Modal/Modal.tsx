import React, { useEffect } from 'react';
import styles from './Modal.module.scss';
import { ModalProps } from './types';
import { Link } from 'react-scroll';

const Modal = ({ isOpen, onClose, title, content, icon: Icon }: ModalProps) => {
  // Закрытие по Escape
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

  // Рендеринг контента – разбиваем строки на параграфы, списки и подзаголовки
  const renderContent = () => {
    return content.map((line, idx) => {
      // Если строка начинается с маркеров – рендерим как пункт списка
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
      // Если строка заканчивается на «:» – подзаголовок
      if (line.endsWith(':')) {
        return (
          <h4 key={idx} className={styles.subtitle}>
            {line}
          </h4>
        );
      }
      // Обычный абзац
      return (
        <p key={idx} className={styles.paragraph}>
          {line}
        </p>
      );
    });
  };

  return (
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

          <Link
            className={styles.actionButton}
            onClick={() => onClose}
            to={'contacts'}
            smooth={'easeInOutCubic'}
            duration={1000}
            spy={true}
            containerId="main"
          >
            Оставить заявку
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
