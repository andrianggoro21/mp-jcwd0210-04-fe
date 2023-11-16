import { Box, Button, Text, Image, Heading, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { IconPlus } from '@tabler/icons-react';
import ButtonCategory from '../buttonCategory';




const BodyProductList = () => {
    return (
        <Box>
            <ButtonCategory/>
            <Box >
                <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='20px'>15 Menus</Text>
                <Box mt='20px' >
                    <Grid templateColumns='repeat(6, 1fr)' gap={5} overflow='hidden'>
                        <GridItem>
                            <Card maxW='220px' maxH='300px' padding='0' borderRadius='16px'>
                                <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                    <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' />
                                    <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='42%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                        <IconPlus color='#ffffff'/>
                                    </Box>
                                </Box>
                                <CardBody padding='10px'>
                                    <Stack spacing='1.5'>
                                        <Heading size='sm'>Padang Rice</Heading>
                                        <Text textAlign='justify' fontSize='14px'>
                                            Roasted chicken special with Padang Seasoning + Cassava leaves + Rice
                                        </Text>
                                        <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                            Rp 35.000
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem>
                            <Card maxW='220px' maxH='300px' padding='0' borderRadius='16px'>
                                <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                    <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' />
                                    <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='42%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                        <IconPlus color='#ffffff'/>
                                    </Box>
                                </Box>
                                <CardBody padding='10px'>
                                    <Stack spacing='1.5'>
                                        <Heading size='sm'>Padang Rice</Heading>
                                        <Text textAlign='justify' fontSize='14px'>
                                            Roasted chicken special with Padang Seasoning + Cassava leaves + Rice
                                        </Text>
                                        <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                            Rp 35.000
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem>
                            <Card maxW='220px' maxH='300px' padding='0' borderRadius='16px'>
                                <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                    <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' />
                                    <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='42%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                        <IconPlus color='#ffffff'/>
                                    </Box>
                                </Box>
                                <CardBody padding='10px'>
                                    <Stack spacing='1.5'>
                                        <Heading size='sm'>Padang Rice</Heading>
                                        <Text textAlign='justify' fontSize='14px'>
                                            Roasted chicken special with Padang Seasoning + Cassava leaves + Rice
                                        </Text>
                                        <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                            Rp 35.000
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem>
                            <Card maxW='220px' maxH='300px' padding='0' borderRadius='16px'>
                                <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                    <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' />
                                    <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='42%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                        <IconPlus color='#ffffff'/>
                                    </Box>
                                </Box>
                                <CardBody padding='10px'>
                                    <Stack spacing='1.5'>
                                        <Heading size='sm'>Padang Rice</Heading>
                                        <Text textAlign='justify' fontSize='14px'>
                                            Roasted chicken special with Padang Seasoning + Cassava leaves + Rice
                                        </Text>
                                        <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                            Rp 35.000
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem>
                            <Card maxW='220px' maxH='300px' padding='0' borderRadius='16px'>
                                <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                    <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' />
                                    <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='42%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                        <IconPlus color='#ffffff'/>
                                    </Box>
                                </Box>
                                <CardBody padding='10px'>
                                    <Stack spacing='1.5'>
                                        <Heading size='sm'>Padang Rice</Heading>
                                        <Text textAlign='justify' fontSize='14px'>
                                            Roasted chicken special with Padang Seasoning + Cassava leaves + Rice
                                        </Text>
                                        <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                            Rp 35.000
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem>
                            <Card maxW='220px' maxH='300px' padding='0' borderRadius='16px'>
                                <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                    <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' />
                                    <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='42%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                        <IconPlus color='#ffffff'/>
                                    </Box>
                                </Box>
                                <CardBody padding='10px'>
                                    <Stack spacing='1.5'>
                                        <Heading size='sm'>Padang Rice</Heading>
                                        <Text textAlign='justify' fontSize='14px'>
                                            Roasted chicken special with Padang Seasoning + Cassava leaves + Rice
                                        </Text>
                                        <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                            Rp 35.000
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </GridItem>
                        {/* <GridItem>
                            <Card maxW='220px' maxH='300px' padding='0' borderRadius='16px'>
                                <Box display='flex' alignItems='flex-end' justifyContent='right'>
                                    <Image  w='100%' borderTopRadius='16px' src='../../../../public/images/product1.png' />
                                    <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='42%' left='87%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.7)' borderRadius='4px'>
                                        <IconPlus color='#ffffff'/>
                                    </Box>
                                </Box>
                                <CardBody padding='10px'>
                                    <Stack spacing='1.5'>
                                        <Heading size='sm'>Padang Rice</Heading>
                                        <Text textAlign='justify' fontSize='14px'>
                                            Roasted chicken special with Padang Seasoning + Cassava leaves + Rice
                                        </Text>
                                        <Text color='#FF7940' fontSize='16px' fontWeight='600'>
                                            Rp 35.000
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </GridItem>
                         */}
                        
                    </Grid>
                    
                    
                </Box>
            </Box>
        </Box>
    )
}
export default BodyProductList;