import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import FlightDetails from "./FlightDetails";

const FlightInfo = ({ flightInfo, setDisplayMode }) => {
  console.log(flightInfo)
  console.log(flightInfo.flightInfo)
  return ( 
    <>
      <VStack maxW="800px" m="auto" spacing="16px" align="left">
        {/* header text */}
        <Heading mt="80px">Success!</Heading>
        <Heading mt="20px" fontSize="16px">You are scheduled to be checked in at XXX and XXX time.</Heading>
        <Box h="30px" w="100px" />

        {/* back arrow */}
        <HStack 
          // ml="15px"
          spacing="5px" 
          cursor="pointer" 
          transitionDuration="300ms"
          transitionTimingFunction="ease-out"
          onClick={() => setDisplayMode('form')} 
          _hover={{
            "marginLeft": "-12px",
            "color": "#F5C14D"
          }}
        >
          <Heading fontSize="16px">←</Heading>
          <Heading fontSize="16px">change trip</Heading>
        </HStack>

        {/* Trip Details */}
        <Heading mt="75px" textAlign="center" fontSize="24px">Trip Details</Heading>
        <VStack spacing="0px">
          {/* color bar */}
          <HStack w="100%" h="15px" bg="#C3322C" transform="translateY(10px)" borderTopRadius="15px">
            <Box h="100%" w="50%" bg="#F5C14D" borderTopLeftRadius="15px"></Box>
          </HStack>

          {/* data container */}
          <Box w="100%" p="20px" borderWidth="1px" borderRadius="15px">
            <Heading fontSize="16px" mt="10px" mb="30px">{flightInfo.firstName} {flightInfo.lastName} ({flightInfo.confirmationNumber})</Heading>
            <FlightDetails flightInfo={flightInfo} />
          </Box>
        </VStack>
      </VStack>
    </>
   );
}
 
export default FlightInfo;