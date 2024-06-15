'use client'

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
import CountriesList from './components/main'

export default function Home(){
  // const countries = JSON.parse('{"countries": [ { "emoji": "🇦🇩", "name": "Andorra", "capital": "Andorra la Vella", "code": "AD" }, { "emoji": "🇦🇪", "name": "United Arab Emirates", "capital": "Abu Dhabi", "code": "AE" }]}')

  return (
    // <></>
    <CountriesList/>
    // <Container padding={4}>
    //   <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    //   <Card>
    //       <CardHeader>
    //         <Heading size='md'> Customer dashboard</Heading>
    //       </CardHeader>
    //       <CardBody>
    //         <Text>View a summary of all your customers over the last month.</Text>
    //       </CardBody>
    //       <CardFooter>
    //         <Button>View here</Button>
    //       </CardFooter>
    //     </Card>

    //   </SimpleGrid>
    // </Container>
  );
}
