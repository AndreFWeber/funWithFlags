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

interface Country {
  emoji: string,
  name: string,
  capital: string,
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
      continent {
        name
      }
    }
  }
`;

const CountriesList = () => {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
                <Button>Learn more</Button>
              </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default CountriesList;
