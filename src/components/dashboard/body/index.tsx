import { Box, Button, Text, Image, Heading, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { IconPlus } from '@tabler/icons-react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer,} from '@chakra-ui/react'
import { IconCurrencyDollar, IconBox, IconUser, } from '@tabler/icons-react';
import { IconTrendingUp } from '@tabler/icons-react';
import { AreaChart } from '../../areaChart';
import ButtonCategoryDashboard from '../buttonCategory';
import { useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    // Define your product type here, or use Record<string, any> for a generic type
    id: number;
    productName: string;
    transaction_details: { transaction: { date: string }; quantity: number }[];
    // Add other properties if needed
  }

const BodyDashboard = () => {
    const [bestSeller, setBestSeller] = useState<Product[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const toast = useToast()



    const getBestSeller = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/report/best-seller`);
            console.log(res?.data?.data);

            let updatedTotalQuantity = 0;
            let updatedTotalAmount = 0;

            const updatedBestSeller = res?.data?.data?.map((product: Product) => {
                const sortedTransactionDetails = product.transaction_details.sort(
                  (a: any, b: any) =>
                    new Date(b.transaction.date).getTime() - new Date(a.transaction.date).getTime()
                );
        
                const totalQuantity = sortedTransactionDetails.reduce(
                  (sum: number, transaction: any) => sum + transaction.quantity,
                  0
                );

                const totalAmount = sortedTransactionDetails.reduce(
                    (sum: number, transaction: any) => sum + parseFloat(transaction.price),
                    0
                  );

                  updatedTotalQuantity += totalQuantity;
                  updatedTotalAmount += totalAmount;
  
        
                const averageQuantityPerDay =
                  totalQuantity / sortedTransactionDetails.length || 0;
        
                return {
                  ...product,
                  totalQuantity: totalQuantity,
                  totalAmount: totalAmount,
                  averageQuantityPerDay,
                };
              });
        
              const sortedBestSeller = updatedBestSeller.sort(
                (a: Product, b: Product) =>
                  new Date(b.transaction_details[0]?.transaction?.date).getTime() -
                  new Date(a.transaction_details[0]?.transaction?.date).getTime()
              );
                
              setTotalQuantity(updatedTotalQuantity);
                setTotalAmount(updatedTotalAmount);
              setBestSeller(sortedBestSeller);
            
            // setBestSeller(res?.data?.data)
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        getBestSeller();
    }, []);
    return (
        <Box mt='30px'>
            <Box display='flex' gap='30px' mb='30px'>
                <Card w='400px' h='230px' padding='5' borderRadius='16px' background= "linear-gradient(102.57deg, #FF7940 19.4%, #FF40B3 95.09%)">
                        <CardBody padding='10px' paddingTop='100px'>
                            <Stack spacing='1.5' alignItems='center' gap='14px'>
                                <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='18%' left='86%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse1-1.png' />
                                 </Box>
                                 <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='30%' left='90%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse1-2.png' />
                                 </Box>
                                <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='25%' left='13%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.5)' borderRadius='50%'>
                                    <IconCurrencyDollar color='#ffffff'/>
                                 </Box>
                                <Box paddingTop='30px' w='full' display='flex' flexDirection='column'>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF' fontSize='16px'>
                                            Total Ammount
                                        </Text>
                                    </Box>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF'  fontSize='24px' fontWeight='600'>
                                            Rp {totalAmount.toFixed(2)}
                                        </Text>
                                        <Box display='flex' alignItems='center' gap='10px'>
                                            <IconTrendingUp color='#FFFFFF'/>
                                            <Text color='#FFFFFF' fontSize='18px' fontWeight='600'>62%</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card w='400px' h='230px' padding='5' borderRadius='16px' background= "linear-gradient(102.57deg, #508EBB 19.4%, #AB40FF 95.09%)">
                        <CardBody padding='10px' paddingTop='100px'>
                            <Stack spacing='1.5' alignItems='center' gap='14px'>
                                <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='18%' left='86%' transform='translate(-50%, -50%)'  borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse2-1.png' />
                                 </Box>
                                 <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='30%' left='90%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse2-2.png' />
                                 </Box>
                                <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='25%' left='13%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.5)'borderRadius='50%'>
                                    <IconBox color='#ffffff'/>
                                 </Box>
                                <Box paddingTop='30px' w='full' display='flex' flexDirection='column'>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF' fontSize='16px'>
                                            Total Orders
                                        </Text>
                                    </Box>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF'  fontSize='24px' fontWeight='600'>
                                            {totalQuantity} products
                                        </Text>
                                        <Box display='flex' alignItems='center' gap='10px'>
                                            <IconTrendingUp color='#FFFFFF'/>
                                            <Text color='#FFFFFF' fontSize='18px' fontWeight='600'>62%</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card w='400px' h='230px' padding='5' borderRadius='16px' background= "linear-gradient(102.57deg, #56A798 19.4%, #347478 95.09%)">
                        <CardBody padding='10px' paddingTop='100px'>
                            <Stack spacing='1.5' alignItems='center' gap='14px'>
                                <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='18%' left='86%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse3-1.png' />
                                 </Box>
                                 <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='30%' left='90%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse3-2.png' />
                                 </Box>
                                <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='25%' left='13%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.5)' borderRadius='50%'>
                                    <IconUser color='#ffffff'/>
                                 </Box>
                                <Box paddingTop='30px' w='full' display='flex' flexDirection='column'>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF' fontSize='16px'>
                                            Total Visitors
                                        </Text>
                                    </Box>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF'  fontSize='24px' fontWeight='600'>
                                            100 people
                                        </Text>
                                        <Box display='flex' alignItems='center' gap='10px'>
                                            <IconTrendingUp color='#FFFFFF'/>
                                            <Text color='#FFFFFF' fontSize='18px' fontWeight='600'>62%</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>                           
            </Box>
            <Box>
                <ButtonCategoryDashboard/>
            </Box>
            <Box display='flex' gap='20px'>
                <Box w='70%'>
                    <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='18px'>Earnings</Text>
                    <Box bgColor='#ffffff' padding='10px' mt='20px' borderRadius='20px'>
                        <AreaChart/>
                    </Box>
                </Box>
                <Box w='30%'>
                    <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='18px'>Best Sellers</Text>
                    <Box h='547px' bgColor='#ffffff' padding='20px' mt='20px' borderRadius='20px'>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th fontFamily='Nunito' fontWeight='600' fontSize='16px'>Menu</Th>
                                        <Th fontFamily='Nunito' fontWeight='600' fontSize='16px'>Total Order</Th>
                                    </Tr>
                                </Thead>
                                <Tbody fontFamily='Nunito' fontWeight='500' fontSize='16px'>
                                    {bestSeller?.map((item: any) => (
                                        <Tr>
                                            <Td>
                                                <Box display='flex' alignItems='center' gap='20px'>
                                                    {/* <Box w='56px' h='56px' bgColor='#D9D9D9' borderRadius='5px'/> */}
                                                    <Image w='76px' h='56px' borderRadius='5px' src={`${import.meta.env.VITE_APP_IMAGE_URL}/product/${item?.image}`} />
                                                    <Text >{item?.productName}</Text>
                                                </Box>
                                            </Td>
                                            <Td >
                                                <Box display='flex' gap='5px' color='#999999'>
                                                    <Text color='#000000'>{Math.round(item?.averageQuantityPerDay)}</Text> orders / day
                                                </Box>
                                                
                                            </Td>  
                                        </Tr>
                                    ))}

                                    
                                    
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}
export default BodyDashboard;