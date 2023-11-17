import { Box, Button, Text, Image, Heading, Stack, Divider, ButtonGroup, Select } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { IconPlus } from '@tabler/icons-react';
import ButtonCategory from '../buttonCategory';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';


interface BodyProductListProps {
    currentPage: number;
    onPageChange: (newPage: number) => void;
  }

const BodyProductList : React.FC<BodyProductListProps> = ({currentPage, onPageChange}) => {
    const [product, setProduct] = useState([])
    const toast = useToast()
    // console.log(currentPage);
    

    const getProductAll = async () => {
        try {
            const pageToFetch = Math.max(currentPage, 1);
            // console.log("cur", pageToFetch);
            
            const res = await axios.get(`http://localhost:8080/product/pagination`, {
                params: {
                    page: pageToFetch,
                    pageSize: 5,
                    productName: "padang",
                    categoryId: 1,
                    alphaId: null,
                    priceId: null,

                }
            });
            // console.log(res?.data?.data);
            setProduct(res?.data?.data)
            // toast({ title: res?.data?.message, status: 'success', position: 'top', duration: 4000, isClosable: true})
        } catch (err : any) {
            alert(err);
            // toast({ title: err.response.data, status: 'error', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        getProductAll();
    }, [onPageChange]);

    return (
        <Box>
            <ButtonCategory/>
            <Box display='flex' flexDirection='column'>
                <Box display='flex' justifyContent='space-between'>
                    <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='20px'>15 Menus</Text>
                    <Box display='flex' gap='20px'>
                        <Select bgColor='#ffffff' placeholder='Select option'>
                            <option value='option1'>A - Z</option>
                            <option value='option2'>Z - A</option>
                        </Select>
                        <Select bgColor='#ffffff' placeholder='Select option'>
                            <option value='option1'>Lowest Price</option>
                            <option value='option2'>Highest Price</option>
                        </Select>
                    </Box>
                </Box>
                <Box mt='20px' >
                    <Grid templateColumns='repeat(6, 1fr)' gap={5} overflow='hidden'>
                        {product?.map((item : any, index) => (
                            <GridItem>
                                <Card w='220px' h='300px' padding='0' borderRadius='16px'>
                                    <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                        <Image  w='100%' borderTopRadius='16px' key={index} src={`${import.meta.env.VITE_APP_IMAGE_URL}/product/${item?.image}`}/>
                                        <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='38%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                            <IconPlus color='#ffffff'/>
                                        </Box>
                                    </Box>
                                    <CardBody padding='10px'>
                                        <Stack spacing='4'>
                                            <Heading size='sm' key={index}>{item?.productName}</Heading>
                                            <Box h='60px' overflow='hidden'>
                                                <Text textAlign='justify' fontSize='14px' key={index}>
                                                    {item?.description}
                                                </Text>
                                            </Box>
                                            <Text color='#FF7940' fontSize='16px' fontWeight='600' key={index}>
                                               Rp. {item?.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
                
            </Box>
        </Box>
    )
}
export default BodyProductList;