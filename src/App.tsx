import React, { useState } from "react";
import { LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Flex,
  HStack,
  Text,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { FIND_MISSIONS } from "./graphql";
import "./App.css";

interface MissionType {
  id: string;
  name: string;
  description: string;
  website: string;
  manufacturers: string;
}

const App = () => {
  const [searchCriteria, setSearchCriteria] = useState("");
  const { data } = useQuery(FIND_MISSIONS, {
    variables: {
      find: { name: searchCriteria },
    },
    fetchPolicy: "cache-first",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria(e.target.value);
  };
  console.log(data);
  return (
    <div className="App">
      <Input placeholder="Search Mision" size="md" 
            background="white" onChange={onChange} />
      <div className="container">
        {data &&
          Array.isArray(data.missions) &&
          data.missions.map((mission: MissionType) => (
            <Box
            background="white"
              w="250px"
              h="350"
              borderWidth="1px"
              borderRadius="10px"
              margin="10px"
              key={mission.id}
            >
              <Image borderRadius="md" src="https://bit.ly/2k1H1t6" w="100%" />
              <Flex>
                <Text
                  mt={2}
                  fontSize="xl"
                  fontWeight="semibold"
                  textAlign="start"
                  className="name-text"
                  marginTop="20px"
                  marginLeft="20px"
                  marginBottom="0px"
                  w="100%"
                >
                  {mission.name}
                </Text>

                <IconButton
                  marginTop="20px"
                  marginRight="20px"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.location.href = mission.website;
                  }}
                  aria-label=""
                  size="xs"
                  icon={<LinkIcon />}
                >
                  Call
                </IconButton>
              </Flex>
              <Text fontSize="sm" mt={2} opacity="0.6" marginLeft="20px" marginTop="0"
                  textAlign="start">
                {mission.manufacturers}
              </Text>
              <Text className="description-text" mt={2}>
                {mission.description}
              </Text>
            </Box>
          ))}
      </div>
    </div>
  );
};

export default App;
