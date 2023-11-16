import { useDisclosure, Box, Text, Input, Button } from '@chakra-ui/react';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import ModalCreateCategory from '../../modal/createCategory';


const HeaderReportTransaction = () => {
   
    return (
        <Box mb='40px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='20px'>Transactions</Text>
                <Box display='flex' alignItems='center' gap='18px'>
                    <Box w='375px' display='flex' alignItems='center' bgColor='#FFFFFF' padding='0 5px 0 5px' borderRadius='5px'>
                        <Input border='none' _focus={{border: "none", boxShadow: "none",}} placeholder='Search Transaction here....'/>
                        <IconSearch color='#838383' />
                    </Box>
                    
                    <Input bgColor='#FFFFFF' w='230px' placeholder="Select Date and Time" size="md" type="datetime-local"/>
                </Box>
                
            </Box>
            
        </Box>
    )
}

export default HeaderReportTransaction;