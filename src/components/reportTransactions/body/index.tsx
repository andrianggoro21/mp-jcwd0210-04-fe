import { Box } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { IconPrinter, IconDownload  } from '@tabler/icons-react';


const BodyReportTransaction = () => {
    const [selectAll, setSelectAll] = useState(false);
    
    return (
        <Box>
            <TableContainer>
                <Table size='sm' variant='striped' bgColor='#FFF6F3' >
                <Thead bgColor='#FF7940' h='40px'>
                    <Tr >
                        <Th color='#ffffff'>Time of Transactions</Th>
                        <Th color='#ffffff'>Transactions ID</Th>
                        <Th color='#ffffff'>Cashier</Th>
                        <Th color='#ffffff'>Product</Th>
                        <Th color='#ffffff'>Total Transactions</Th>
                        <Th color='#ffffff' textAlign='center'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody color='#1E1E1E' fontFamily='Nunito' fontWeight='400' fontSize='12px'>
                    <Tr>
                        <Td >11 - 11 - 2023  (14:10:10)</Td>
                        <Td >#VZ1234</Td>
                        <Td >Emma Stewy Corner</Td>
                        <Td >Fried Rice</Td>
                        <Td >Rp 55.500</Td>
                        <Td textAlign='center'>
                            <Box display='flex' justifyContent='center' gap='10px'>
                                <Button size='sm' w='100px' variant='outline' color='#FF7940' border='1px solid #FF7940'>View Invoice</Button>
                                <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'><IconPrinter stroke={1.5}/></Button>
                                <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'><IconDownload stroke={1.5}/></Button>
                            </Box>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td >11 - 11 - 2023  (14:10:10)</Td>
                        <Td >#VZ1234</Td>
                        <Td >Emma Stewy Corner</Td>
                        <Td >Fried Rice</Td>
                        <Td >Rp 55.500</Td>
                        <Td textAlign='center'>
                            <Box display='flex' justifyContent='center' gap='10px'>
                                <Button size='sm' w='100px' variant='outline' color='#FF7940' border='1px solid #FF7940'>View Invoice</Button>
                                <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'><IconPrinter stroke={1.5}/></Button>
                                <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'><IconDownload stroke={1.5}/></Button>
                            </Box>
                        </Td>
                    </Tr>
                    
                    
                </Tbody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default BodyReportTransaction;