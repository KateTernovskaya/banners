import React, { useState } from 'react';
import styles from './Services.module.scss';
import { SectionTitle } from '../../shared';
import ServicesCard from '../ServicesCard';
import Modal from '../Modal';
import { data } from './data';

const Services = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof data)[0] | null
  >(null);

  const openModal = (service: (typeof data)[0]) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <div id={'services'}>
      <SectionTitle title="Услуги" />

      <div className={styles.wrapper}>
        {data.map((item) => (
          <ServicesCard
            key={item.id}
            name={item.name}
            description={item.description}
            svg={item.svg}
            onClick={() => openModal(item)}
          />
        ))}
      </div>

      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={closeModal}
          title={selectedService.name}
          content={selectedService.modalContent}
          icon={selectedService.svg}
        />
      )}
    </div>
  );
};

export default Services;
