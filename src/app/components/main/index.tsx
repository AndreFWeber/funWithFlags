// components/CountriesList.tsx
'use client'

import { useQuery, gql } from '@apollo/client';
import {
  Container,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button
} from '@chakra-ui/react';
import { useState } from 'react';
import CountryInfoModal from '../CountryInfoModal'
import LoadingSpinner from '../Spinner';
import ErrorMessage from '../Error';

interface Country {
  emoji: string,
  name: string,
  capital: string,
  code: string,
  continent: {
    name: string
  }
}

const COUNTRIES_QUERY = gql`
  {
    countries {
      emoji,
      name,
      capital,
      code,
      continent {
        name
      }
    }
  }
`;

const CountriesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  const { loading, error, data } = useQuery(COUNTRIES_QUERY);
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage/>;

  return (
    <Container padding={2} maxW='container.lg'>
      <SimpleGrid columns={{sm: 2, md: 3, xl: 5}} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 2fr))'>
        {data.countries.map((country: Country) => (
          <Card key={country.name}>
              <CardHeader>
                <Heading size='md'>{country.emoji} {country.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>Continent: {country.continent.name}</Text>
                <Text>Capital city: {country.capital}</Text>
              </CardBody>
              <CardFooter>
                <Button onClick={() => {
                  setIsModalOpen(true);
                  setCountryCode(country.code)
                }}>Learn more</Button>
              </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <CountryInfoModal isOpen={isModalOpen} countryCode={countryCode} onClose={()=>setIsModalOpen(false)}/>
    </Container>
  );
};

export default CountriesList;
