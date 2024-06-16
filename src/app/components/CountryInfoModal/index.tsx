// src/components/CountryInfoModal.tsx
'use client'

import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  Center
} from '@chakra-ui/react';
import Header from './Header';
import LoadingSpinner from '../Spinner'
import ErrorMessage from '../Error';

interface CountryInfoModalProps {
  isOpen: boolean;
  countryCode: string;
  onClose: () => void;
}

interface Country {
country:{  name: string,
  native: string,
  capital: string,
  emoji: string,
  currency: string,
  languages: {
      code: string,
      name: string
  }[]}
}

const countryQuery = (countryCode:string) => gql`
  {
    country(code: "${countryCode}") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const CountryInfoModal: React.FC<CountryInfoModalProps> = ({ isOpen, countryCode, onClose }) => {

  const { loading, error, data } = useQuery(countryQuery(countryCode));
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage/>;
  const country = (data as Country).country

  return (
    <>
      {!!country && (<Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Header/>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Text  fontWeight='bold'>{country.name}</Text>
          </Center>

          <Text>Native name: {country.native}</Text>
          <Text>Capital city: {country.capital}</Text>
          <Text>Flag: {country.emoji}</Text>
          <Text>Currency: {country.currency}</Text>
          <Text>Languages: {country.languages.map((item) => `${item?.name} (${item?.code.toUpperCase()})`).join(', ')}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>)}
    </>
  );

};

export default CountryInfoModal;
/*


*/