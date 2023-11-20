import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Switch, Button } from "@chakra-ui/react";
import EditUserModal from "./editUser";
import { getAllUser } from "../../../Action/auth";

const BodyUserManagement = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [allUser, setAllUser] = useState(null);
  console.log("allUser");
  console.log(allUser);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getAllUsers = async () => {
    try {
      return getAllUser().then((res) => {
        setAllUser(res.data);
      });
    } catch (error) {
      return error;
    }
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Box>
      <TableContainer>
        <Table size="sm" variant="striped" bgColor="#FFF6F3">
          <Thead bgColor="#FF7940" h="40px">
            <Tr>
              <Th>No.</Th>
              <Th color="#ffffff">Profile Picture</Th>
              <Th color="#ffffff">Username</Th>
              <Th color="#ffffff">Email</Th>
              <Th color="#ffffff">Phone Number</Th>
              <Th color="#ffffff">Address</Th>
              <Th color="#ffffff" textAlign="center">
                Status
              </Th>
              <Th color="#ffffff" textAlign="center">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody
            color="#1E1E1E"
            fontFamily="Nunito"
            fontWeight="400"
            fontSize="12px">
            {allUser?.map((item, index) => {
              return (
                <Tr key={index}>
                  {item.id ? <Td>{item?.id}</Td> : <Td></Td>}
                  {item.avatar ? <Td>{item.avatar}</Td> : <Td></Td>}
                  {item.username ? <Td>{item.username}</Td> : <Td></Td>}
                  {item.email ? <Td>{item.email}</Td> : <Td></Td>}
                  {item.phoneNumber ? <Td>{item.phoneNumber}</Td> : <Td></Td>}
                  {item.address ? <Td>{item.address}</Td> : <Td></Td>}
                  {item.status && item.status === true ? (
                    <Td>Active</Td>
                  ) : (
                    <Td>Unactive</Td>
                  )}
                  <Td textAlign="center">
                    <Box display="flex" justifyContent="center" gap="10px">
                      <Button
                        onClick={onOpen}
                        size="sm"
                        w="50px"
                        bgColor="#FF7940"
                        color="#ffffff">
                        Edit
                      </Button>

                      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton />
                          <EditUserModal />
                        </ModalContent>
                      </Modal>
                      <Button
                        size="sm"
                        w="50px"
                        variant="outline"
                        color="#FF7940"
                        border="1px solid #FF7940">
                        Delete
                      </Button>
                    </Box>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BodyUserManagement;
