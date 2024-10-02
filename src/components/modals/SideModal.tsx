'use client';

import React from 'react'
import Modal from './Modal';
import useSideModal from '../../hooks/useSideModal'

const SideModal = () => {

  const sideModal = useSideModal();

  return (
    <Modal


      isOpen={sideModal.isOpen}
      onClose={sideModal.onClose}
    />
  )
}

export default SideModal
