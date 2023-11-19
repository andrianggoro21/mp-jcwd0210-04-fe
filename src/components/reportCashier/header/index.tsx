import { useDisclosure, Box, Text, Input, Button } from '@chakra-ui/react';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import ModalCreateCategory from '../../modal/createCategory';


const HeaderReportCashier = () => {
    return (
        <Box mb='40px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='20px'>Cashier Report</Text>
                <Box display='flex' alignItems='center' gap='18px'>
                    <Box w='375px' display='flex' alignItems='center' bgColor='#FFFFFF' padding='0 5px 0 5px' borderRadius='5px'>
                        <Input border='none' _focus={{border: "none", boxShadow: "none",}} placeholder='Search Cashier here....'/>
                        <IconSearch color='#838383' />
                    </Box>
                    
                    
                </Box>
                
            </Box>
        </Box>
    )
}

export default HeaderReportCashier;