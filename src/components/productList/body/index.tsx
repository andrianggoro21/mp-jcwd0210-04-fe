import { Box, Button, Text, Image, Heading, Stack, Divider, ButtonGroup, Select } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { IconPlus } from '@tabler/icons-react';
import ButtonCategory from '../buttonCategory';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
interface BodyProductListProps {
    currentPage: number;
    onPageChange: (newPage: number) => void;
    inputSearch: string;
}

const BodyProductList : React.FC<BodyProductListProps> = ({currentPage, onPageChange, inputSearch}) => {
    const [product, setProduct] = useState([])
    const [categoryChange, setCategoryChange] = useState<number | null>(null)
    const [alphabet, setAlphabet] = useState<number | undefined>(undefined);
    const [price, setPrice] = useState<number | undefined>(undefined);
    const toast = useToast()
    
    const getProductAll = async () => {
        try {
            // console.log("alpha", alphabet);
            // console.log("price", price);
            const pageToFetch = Math.max(currentPage, 1);
            const res = await axios.get(`http://localhost:8080/product/pagination`, {
                params: {
                    page: pageToFetch,
                    pageSize: 12,
                    productName: inputSearch,
                    categoryId: categoryChange,
                    alphaId: alphabet,
                    priceId: price,

                }
            });
            setProduct(res?.data?.data)
        } catch (err : any) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true})
        }
    };

    useEffect(() => {
        getProductAll();
    }, [categoryChange, alphabet, price, onPageChange]);

    const handleCategoryChange = (category: number | null, event?: React.MouseEvent<HTMLButtonElement>) => {
        if (event) {
          event.preventDefault();
        }
       setCategoryChange(category)
      };

      const handleAlphabetChange = (value: number) => {
        setAlphabet(value);
      };
    
      const handlePriceChange = (value: number) => {
        setPrice(value);
      };

    return (
        <Box>
            <ButtonCategory onCategoryChange={handleCategoryChange}/>
            <Box display='flex' flexDirection='column'>
                <Box display='flex' justifyContent='space-between'>
                    <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='20px'>Menu</Text>
                    {/* <form onSubmit={formik.handleSubmit} > */}
                        <Box display='flex' gap='20px'>
                            <Box>
                                <Select bgColor="#ffffff" placeholder="" name="alphabet" value={alphabet === null ? undefined : alphabet} onChange={(e) => handleAlphabetChange(Number(e.target.value))}>
                                    <option value={undefined}>Alphabet</option>
                                    <option value={0}>A - Z</option>
                                    <option value={1}>Z - A</option>
                                </Select>
                            </Box>
                            <Box>
                                <Select bgColor="#ffffff" placeholder="" name="price" value={price === null ? undefined : price} onChange={(e) => handlePriceChange(Number(e.target.value))}>
                                    <option value={undefined}>Price</option>
                                    <option value={0}>Lowest Price</option>
                                    <option value={1}>Highest Price</option>
                                </Select>
                            </Box>
                            
                            
                        </Box>
                    {/* </form> */}
                </Box>
                <Box mt='10px' >
                    <Grid templateColumns='repeat(6, 1fr)' gridColumnGap={1} gridRowGap={10} overflow='hidden' padding='20px'>
                        {/* {product?.map((item : any) => (
                            <GridItem>
                                <Card w='220px' h='300px' padding='0' borderRadius='16px'>
                                    <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                        <Image  w='100%' borderTopRadius='16px' src={`${import.meta.env.VITE_APP_IMAGE_URL}/product/${item?.image}`}/>
                                        <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='38%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                            <IconPlus color='#ffffff'/>
                                        </Box>
                                    </Box>
                                    <CardBody padding='10px'>
                                        <Stack spacing='4'>
                                            <Heading size='sm'>{item?.productName}</Heading>
                                            <Box h='60px' overflow='hidden'>
                                                <Text textAlign='justify' fontSize='14px'>
                                                    {item?.description}
                                                </Text>
                                            </Box>
                                            <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                               Rp. {item?.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        ))} */}

                        {product?.map((item: any) => (
                            <GridItem display='flex' className='grid item' alignItems='center' justifyContent='center' key={item.id} >
                                {item?.statusId === 1 ? ( 
                                <Card w='220px' h='300px' padding='0' borderRadius='16px' css={{transition: 'transform 0.3s ease-in-out',':hover': {transform: 'scale(1.1)',},}}>
                                    <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                        <Image  w='100%' borderTopRadius='16px' src={`${import.meta.env.VITE_APP_IMAGE_URL}/product/${item?.image}`}/>
                                        {/* <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='38%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                            <IconPlus color='#ffffff'/>
                                        </Box> */}
                                    </Box>
                                    <CardBody padding='10px'>
                                        <Stack spacing='4'>
                                            <Heading size='sm'>{item?.productName}</Heading>
                                            <Box h='60px' overflow='hidden'>
                                                <Text textAlign='justify' fontSize='14px'>
                                                    {item?.description}
                                                </Text>
                                            </Box>
                                            <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                               Rp. {item?.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                                ) : (
                                <Card key={item.id}w='220px' h='300px' padding='0' borderRadius='16px' bgColor='rgba(148, 148, 148, 0.5)'>
                                    <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                        <Image  w='100%' borderTopRadius='16px' src={`${import.meta.env.VITE_APP_IMAGE_URL}/product/${item?.image}`}/>
                                        <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='38%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                            <IconPlus color='#ffffff'/>
                                        </Box>
                                    </Box>
                                    <CardBody padding='10px'>
                                        <Stack spacing='4'>
                                            <Heading size='sm'>{item?.productName}</Heading>
                                            <Box h='60px' overflow='hidden'>
                                                <Text textAlign='justify' fontSize='14px'>
                                                    {item?.description}
                                                </Text>
                                            </Box>
                                            <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                               Rp. {item?.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                                )}
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
export default BodyProductList;