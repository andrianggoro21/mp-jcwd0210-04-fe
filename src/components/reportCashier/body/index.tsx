import { Box } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useState, useEffect} from 'react';
import { IconPrinter, IconDownload  } from '@tabler/icons-react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


interface BodyReportCashierProps {
    currentPage: number;
    onPageChange: (newPage: number) => void;
    inputSearch: string;
  }

  interface User {
    id: number;
    username: string;
    transaction: Array<{
      id: number;
      userId: number;
      date: string;
      totalQuantity: number;
      totalPrice: string;
      // Add other properties as needed
    }>;
    // Add other user properties as needed
  }

const BodyReportCashier : React.FC<BodyReportCashierProps> = ({currentPage, onPageChange, inputSearch}) => {
    const [users, setUsers] = useState<User[]>([]);
    const toast = useToast()
    const navigate = useNavigate()

    const getUserAll = async () => {
        try {
            // console.log("alpha", currentPage);
            // console.log("price", inputSearch);
            const pageToFetch = Math.max(currentPage, 1);
            const res = await axios.get(`http://localhost:8080/report/user`, {
                params: {
                    page: pageToFetch,
                    pageSize: 7,
                    username: inputSearch,
                }
            });
            // console.log(res?.data?.data);

            const usersWithTotals = res?.data?.data.map((user: User) => {
                const totalTransactions = user?.transaction?.length || 0;
                const totalQuantity = user?.transaction?.reduce((acc: number, transaction) => acc + transaction.totalQuantity, 0) || 0;
        
                return {
                  ...user,
                  totalTransactions,
                  totalQuantity,
                };
              });
            
            setUsers(usersWithTotals)
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        getUserAll();
    }, [onPageChange]);
    
    return (
        <Box mt='120px'>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {users?.map((item: any) => (
                    <GridItem >
                        <Card w='367px' h='230px' padding='0' borderRadius='16px' onClick={() => {localStorage.setItem("userId", item.id); localStorage.setItem("username", item.username); navigate("/transaction-cashier")}}>
                        <Box display='flex' alignItems='flex-end' justifyContent='right' >
                            {/* <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' /> */}
                            <Box w='150px' h='150px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='0%' left='50%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='50%'>
                                <Image  w='150px' h='150px' borderRadius='50%' src='../../../../public/images/product1.png' />
                            </Box>
                        </Box>
                        <CardBody padding='10px' paddingTop='100px'>
                            <Stack spacing='1.5' alignItems='center' gap='14px'>
                                <Heading size='md'>{item?.username}</Heading>
                                <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                    <Text fontSize='18px'  >
                                        Total Transactions 
                                    </Text>
                                    <Text color='#FF7940' fontFamily='Nunito' fontSize='18px' fontWeight='600'>
                                        {item.totalTransactions} Transactions
                                    </Text>
                                </Box>
                                <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                    <Text textAlign='justify' fontSize='18px'>
                                        Total Products 
                                    </Text>
                                    <Text color='#FF7940' fontFamily='Nunito' fontSize='18px' fontWeight='600'>
                                        {item.totalQuantity} Products
                                    </Text>
                                </Box>
                                    
                            </Stack>
                        </CardBody>
                    </Card>         
                </GridItem>
                ))}
                
                
            </Grid>
                       

        </Box>
    )
}

export default BodyReportCashier;