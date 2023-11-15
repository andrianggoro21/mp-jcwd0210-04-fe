import { Box, Text, Button } from '@chakra-ui/react'

const FooterUserManagement = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent='space-between'>
           <Box>
            <Text color='#707070' fontFamily='Nunito' fontWeight='400' fontSize='14px'>Showing 7 of 90 users</Text>
           </Box>
           <Box display='flex' gap='10px'>
            <Button size='sm' bgColor='#ffffff'>1</Button>
            <Button size='sm' bgColor='#ffffff'>2</Button>
            <Button size='sm' bgColor='#ffffff'>3</Button>
            <Button size='sm' bgColor='#ffffff'>4</Button>
           </Box>
        </Box>
    )
}

export default FooterUserManagement;