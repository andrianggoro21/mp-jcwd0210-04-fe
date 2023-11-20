import {
  Box,
  Text,
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import Register from "../../../pages/Auth/registration";

const HeaderUserManagement = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mb="40px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text
          color="#000000"
          fontFamily="Nunito"
          fontWeight="700"
          fontSize="20px">
          User Management
        </Text>
        <Box display="flex" alignItems="center" gap="18px">
          <Box
            w="375px"
            display="flex"
            alignItems="center"
            bgColor="#FFFFFF"
            padding="0 5px 0 5px"
            borderRadius="5px">
            <Input
              border="none"
              _focus={{ border: "none", boxShadow: "none" }}
              placeholder="Search User here...."
            />
            <IconSearch color="#838383" />
          </Box>

          <Button
            onClick={onOpen}
            bgColor="#FF7940"
            color="#ffffff"
            display="flex"
            gap="10px">
            {" "}
            <IconPlus /> <Text>Create User</Text>{" "}
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <Register />
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderUserManagement;
