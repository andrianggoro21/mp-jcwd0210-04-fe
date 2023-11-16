import { Box, Button, Text, Image } from '@chakra-ui/react';

const ButtonCategory = () => {
    return (
        <Box mb='30px'>
            <Box display='flex' alignItems='center' gap='36px'>
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

export default ButtonCategory;