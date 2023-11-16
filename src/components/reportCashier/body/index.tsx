import { Box } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useState } from 'react';
import { IconPrinter, IconDownload  } from '@tabler/icons-react';


const BodyReportCashier = () => {
    const [selectAll, setSelectAll] = useState(false);
    
    return (
        <Box mt='120px'>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                <GridItem>
                    <Card w='367px' h='230px' padding='0' borderRadius='16px'>
                    <Box display='flex' alignItems='flex-end' justifyContent='right' >
                        {/* <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' /> */}
                        <Box w='150px' h='150px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='0%' left='50%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='50%'>
                            <Image  w='150px' h='150px' borderRadius='50%' src='../../../../public/images/product1.png' />
                        </Box>
                    </Box>
                    <CardBody padding='10px' paddingTop='100px'>
                        <Stack spacing='1.5' alignItems='center' gap='14px'>
                            <Heading size='md'>Layla bin Nolan</Heading>
                            <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                <Text fontSize='18px' fontFamily='Nunito' fontWeight='500' color='#838383' >
                                    Total Transactions 
                                </Text>
                                <Text color='#FF7940' fontFamily='Nunito' fontSize='18px' fontWeight='600'>
                                    100 Transactions
                                </Text>
                            </Box>
                            <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                <Text textAlign='justify' fontSize='18px'>
                                    Total Products 
                                </Text>
                                <Text color='#FF7940' fontFamily='Nunito' fontSize='18px' fontWeight='600'>
                                    1000 Products
                                </Text>
                            </Box>
                                
                        </Stack>
                    </CardBody>
                 </Card>         
                </GridItem>
                <GridItem>
                    <Card w='367px' h='230px' padding='0' borderRadius='16px'>
                    <Box display='flex' alignItems='flex-end' justifyContent='right' >
                        {/* <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' /> */}
                        <Box w='150px' h='150px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='0%' left='50%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='50%'>
                            <Image  w='150px' h='150px' borderRadius='50%' src='../../../../public/images/product1.png' />
                        </Box>
                    </Box>
                    <CardBody padding='10px' paddingTop='100px'>
                        <Stack spacing='1.5' alignItems='center' gap='14px'>
                            <Heading size='md'>Layla bin Nolan</Heading>
                            <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                <Text textAlign='justify' fontSize='18px'>
                                    Roasted 
                                </Text>
                                <Text color='#FF7940' fontSize='18px' fontWeight='600'>
                                    Rp 35.000
                                </Text>
                            </Box>
                            <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                <Text textAlign='justify' fontSize='18px'>
                                    Roasted 
                                </Text>
                                <Text color='#FF7940' fontSize='18px' fontWeight='600'>
                                    Rp 35.000
                                </Text>
                            </Box>
                                
                        </Stack>
                    </CardBody>
                 </Card>         
                </GridItem>
                <GridItem>
                    <Card w='367px' h='230px' padding='0' borderRadius='16px'>
                    <Box display='flex' alignItems='flex-end' justifyContent='right' >
                        {/* <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' /> */}
                        <Box w='150px' h='150px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='0%' left='50%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='50%'>
                            <Image  w='150px' h='150px' borderRadius='50%' src='../../../../public/images/product1.png' />
                        </Box>
                    </Box>
                    <CardBody padding='10px' paddingTop='100px'>
                        <Stack spacing='1.5' alignItems='center' gap='14px'>
                            <Heading size='md'>Layla bin Nolan</Heading>
                            <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                <Text textAlign='justify' fontSize='18px'>
                                    Roasted 
                                </Text>
                                <Text color='#FF7940' fontSize='18px' fontWeight='600'>
                                    Rp 35.000
                                </Text>
                            </Box>
                            <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                <Text textAlign='justify' fontSize='18px'>
                                    Roasted 
                                </Text>
                                <Text color='#FF7940' fontSize='18px' fontWeight='600'>
                                    Rp 35.000
                                </Text>
                            </Box>
                                
                        </Stack>
                    </CardBody>
                 </Card>         
                </GridItem>
                <GridItem>
                    <Card w='367px' h='230px' padding='0' borderRadius='16px'>
                    <Box display='flex' alignItems='flex-end' justifyContent='right' >
                        {/* <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' /> */}
                        <Box w='150px' h='150px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='0%' left='50%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='50%'>
                            <Image  w='150px' h='150px' borderRadius='50%' src='../../../../public/images/product1.png' />
                        </Box>
                    </Box>
                    <CardBody padding='10px' paddingTop='100px'>
                        <Stack spacing='1.5' alignItems='center' gap='14px'>
                            <Heading size='md'>Layla bin Nolan</Heading>
                            <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                <Text textAlign='justify' fontSize='18px'>
                                    Roasted 
                                </Text>
                                <Text color='#FF7940' fontSize='18px' fontWeight='600'>
                                    Rp 35.000
                                </Text>
                            </Box>
                            <Box w='full' display='flex' alignItems='center' justifyContent='space-between'>
                                <Text textAlign='justify' fontSize='18px'>
                                    Roasted 
                                </Text>
                                <Text color='#FF7940' fontSize='18px' fontWeight='600'>
                                    Rp 35.000
                                </Text>
                            </Box>
                                
                        </Stack>
                    </CardBody>
                 </Card>         
                </GridItem>
            </Grid>
                       

        </Box>
    )
}

export default BodyReportCashier;