import { Box, Text, Button } from '@chakra-ui/react'


interface FooterReportCashierTableProps {
    currentPage: number;
    onPageChange: (newPage: number) => void;
  }

const FooterCashierReportTable : React.FC<FooterReportCashierTableProps> = ({ currentPage, onPageChange }) => {
    return (
        // <Box display='flex' alignItems='center' justifyContent='space-between'>
        //    <Box>
        //     <Text color='#707070' fontFamily='Nunito' fontWeight='400' fontSize='14px'>Showing 7 of 90 Transactions</Text>
        //    </Box>
        //    <Box display='flex' gap='10px'>
        //     <Button size='sm' bgColor='#ffffff'>1</Button>
        //     <Button size='sm' bgColor='#ffffff'>2</Button>
        //     <Button size='sm' bgColor='#ffffff'>3</Button>
        //     <Button size='sm' bgColor='#ffffff'>4</Button>
        //    </Box>
        // </Box>
        <Box display='flex' alignItems='center' justifyContent='center'>
            {/* <Box>
            <Text color='#707070' fontFamily='Nunito' fontWeight='400' fontSize='14px'>Showing 7 of 90 products</Text>
            </Box> */}
            <Box display='flex' gap='10px' alignItems='center'>
            <Button size='sm' bgColor='#FF7940' color='#ffffff' onClick={() => onPageChange(currentPage === 1? 1 :  currentPage - 1)} disabled={currentPage === 1}>Prev</Button>
            <Box display='flex' justifyContent='center' w='30px'><Text fontFamily='Nunito' fontSize='16px'>{currentPage}</Text></Box>
            <Button size='sm' bgColor='#FF7940' color='#ffffff' onClick={() => onPageChange(currentPage + 1)}>Next</Button>
            </Box>
        </Box>
        
    )
}

export default FooterCashierReportTable;