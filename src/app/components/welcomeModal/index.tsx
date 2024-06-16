// src/components/WelcomeModal.tsx
'use client'

import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button
} from '@chakra-ui/react';
import Header from './Header';
import UsernameBox from './UsernameBox'
import { useUser } from '../../context/UserContext';
import JobTitleBox from './JobTitleBox';

enum ModalBox {
  userName = 0,
  jobTitle = 1,
}
 
interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(ModalBox.userName);
  const { user } = useUser();

  const handleNext = () => {
    if (step === ModalBox.userName && user.username) {
      setStep(ModalBox.jobTitle);
    } else if (step === ModalBox.jobTitle && user.jobTitle) {
      console.log( user.username, user.jobTitle );
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} key={'xl'} closeOnOverlayClick={false} isCentered>
      <ModalOverlay 
            bg='blackAlpha.300'
            backdropFilter='blur(50px) hue-rotate(90deg)'
      />
      <ModalContent>
        <Header/>
        <ModalBody>
          {step === ModalBox.userName && (
            <UsernameBox />
          )}
          {step === ModalBox.jobTitle && (
            <JobTitleBox />
          )}
        </ModalBody>
        <ModalFooter>
          {step === ModalBox.jobTitle && (
            <Button variant="teal" mr={3} onClick={() => setStep(ModalBox.userName)}>
              Back
            </Button>
          )}
          <Button colorScheme="teal" onClick={handleNext}>
            {step === ModalBox.userName ? 'Next' : 'Finish'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;
