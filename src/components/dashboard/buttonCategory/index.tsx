import { Box, Button, Text, Image } from '@chakra-ui/react';

const ButtonCategoryDashboard = () => {
    return (
        <Box mb='30px'>
            <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='18px'>Categories</Text>
            <Box display='flex' alignItems='center' gap='36px' mt='20px'>
                <Button w='100px' h='100px' bgColor='#FFFFFF'>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src='../../../../public/images/allmenu.svg' />
                        <Text color='#B4B4B4'>All Menus</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF'>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image color='#FF7940' src='../../../../public/images/main-course.svg' />
                        <Text color='#B4B4B4'>Main Course</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF'>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src='../../../../public/images/dessert.svg' />
                        <Text color='#B4B4B4'>Dessert</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF'>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src='../../../../public/images/snack.svg' />
                        <Text color='#B4B4B4'>Snack</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF'>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src='../../../../public/images/gelato.svg' />
                        <Text color='#B4B4B4'>Gelato</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF'>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src='../../../../public/images/coffee.svg' />
                        <Text color='#B4B4B4'>Coffee</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF'>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src='../../../../public/images/non-coffee.svg' />
                        <Text color='#B4B4B4'>Non-Coffee</Text>
                    </Box> 
                </Button>
            </Box>
        </Box>
    )
}

export default ButtonCategoryDashboard;