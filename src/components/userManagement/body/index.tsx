import { Box } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import { useState } from 'react';

const BodyUserManagement = () => {
    const [selectAll, setSelectAll] = useState(false);
    
    return (
        <Box>
            <TableContainer>
                <Table size='sm' variant='striped' bgColor='#FFF6F3' >
                <Thead bgColor='#FF7940' h='40px'>
                    <Tr >
                        <Th ><Checkbox isChecked={selectAll} onChange={() => setSelectAll(!selectAll)}/></Th>
                        <Th color='#ffffff'>Profile Picture</Th>
                        <Th color='#ffffff'>Username</Th>
                        <Th color='#ffffff'>Email</Th>
                        <Th color='#ffffff'>Phone Number</Th>
                        <Th color='#ffffff' textAlign='center'>Status</Th>
                        <Th color='#ffffff' textAlign='center'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody color='#1E1E1E' fontFamily='Nunito' fontWeight='400' fontSize='12px'>
                    <Tr>
                        <Td><Checkbox isChecked={selectAll}/></Td>
                        <Td><Box bgColor='#D9D9D9' w='60px' h='60px' borderRadius='50%'/></Td>
                        <Td>Barbara Domanique</Td>
                        <Td>barbaradominique@gmail.com</Td>
                        <Td>088123456789</Td>
                        <Td textAlign='center'><Switch colorScheme='green'/></Td>
                        <Td textAlign='center'><Box display='flex' justifyContent='center' gap='10px'><Button size='sm' w='50px' bgColor='#FF7940' color='#ffffff'>Edit</Button> <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'>Delete</Button></Box></Td>
                    </Tr>
                    <Tr>
                        <Td><Checkbox isChecked={selectAll}/></Td>
                        <Td><Box bgColor='#D9D9D9' w='60px' h='60px' borderRadius='50%'/></Td>
                        <Td>Barbara Domanique</Td>
                        <Td>barbaradominique@gmail.com</Td>
                        <Td>088123456789</Td>
                        <Td textAlign='center'><Switch colorScheme='green'/></Td>
                        <Td textAlign='center'><Box display='flex' justifyContent='center' gap='10px'><Button size='sm' w='50px' bgColor='#FF7940' color='#ffffff'>Edit</Button> <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'>Delete</Button></Box></Td>
                    </Tr>
                    
                    
                    
                </Tbody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default BodyUserManagement;