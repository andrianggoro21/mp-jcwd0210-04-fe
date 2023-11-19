import { Box } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Image} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { IconPrinter, IconDownload  } from '@tabler/icons-react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const BodyTransactionProduct  = () => {
    const [transactionDetail, setTransactionDetail] = useState([])
    const toast = useToast()
    const transactionId = localStorage.getItem("transactionId")
    

    const getTransactionDetail = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/report/detail/${transactionId}`);
            console.log(res?.data?.data);
            
            setTransactionDetail(res?.data?.data)
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        getTransactionDetail();
    }, []);
    
    return (
        <Box>
            <TableContainer>
                <Table size='sm' variant='striped' bgColor='#FFF6F3' >
                <Thead bgColor='#FF7940' h='40px'>
                    <Tr >
                        <Th color='#ffffff'>Transactions ID</Th>
                        <Th color='#ffffff'>Product Image</Th>
                        <Th color='#ffffff'>Product</Th>
                        <Th color='#ffffff'>Quantity</Th>
                        <Th color='#ffffff'>Price</Th>
                    </Tr>
                </Thead>
                <Tbody color='#1E1E1E' fontFamily='Nunito' fontWeight='400' fontSize='12px'>
                    {transactionDetail?.map((item : any) => (
                        <Tr>
                            <Td >{item?.transactionId}</Td>
                            <Td ><Image w='100px' h='60px' src={`${import.meta.env.VITE_APP_IMAGE_URL}/product/${item?.product?.image}`}/></Td>
                            <Td >{item?.product?.productName}</Td>
                            <Td >{item?.quantity}</Td>
                            <Td >{item?.price}</Td>
                        </Tr>
                    ))}
                    
                </Tbody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default BodyTransactionProduct;