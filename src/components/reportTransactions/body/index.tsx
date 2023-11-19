import { Box } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { IconPrinter, IconDownload  } from '@tabler/icons-react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

interface BodyReportTransactionProps {
    startDate: string;
    endDate: string;
}

const BodyReportTransaction : React.FC<BodyReportTransactionProps> = ({ startDate, endDate }) => {
    const [transaction, setTransaction] = useState([])
    const toast = useToast()
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    
    

    const getTransactionAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/report/all`,{
                params: {
                    startDate: startDate,
                    endDate: endDate
                }
            });
            setTransaction(res?.data?.data)
            // window.location.reload();
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        
        getTransactionAll();
        
        // const fetchData = async () => {
        //     await getTransactionAll();
        // };

        // fetchData();
    }, [endDate]);
    
    return (
        <Box>
            <TableContainer>
                <Table size='sm' variant='striped' bgColor='#FFF6F3' >
                <Thead bgColor='#FF7940' h='40px'>
                    <Tr >
                        <Th color='#ffffff'>Transactions ID</Th>
                        <Th color='#ffffff'>Time of Transactions</Th>
                        <Th color='#ffffff'>Cashier</Th>
                        <Th color='#ffffff'>Product</Th>
                        <Th color='#ffffff'>Total Transactions</Th>
                        <Th color='#ffffff' textAlign='center'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody color='#1E1E1E' fontFamily='Nunito' fontWeight='400' fontSize='12px'>
                    {transaction?.map((item : any) => (
                        <Tr>
                            <Td >{item?.id}</Td>
                            <Td >{item?.date}</Td>
                            <Td >{item?.user?.username}</Td>
                            <Td >{item?.transaction_details.map((item: any) => item?.product?.productName)}</Td>
                            <Td >{item?.totalPrice}</Td>
                            <Td textAlign='center'>
                                <Box display='flex' justifyContent='center' gap='10px'>
                                    <Button size='sm' w='100px' variant='outline' color='#FF7940' border='1px solid #FF7940'>View Invoice</Button>
                                    <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'><IconPrinter stroke={1.5}/></Button>
                                    <Button size='sm' w='50px' variant='outline' color='#FF7940' border='1px solid #FF7940'><IconDownload stroke={1.5}/></Button>
                                </Box>
                            </Td>
                        </Tr>
                    ))}
                    
                </Tbody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default BodyReportTransaction;