import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            CellFud
          </Typography>
          <div>CellFud es un establecimiento de reparacion de dispositivos celulares <b>Iphone, Android</b>, asi como <b>Tables</b>, estamos especializados en microsoldadura, ademas de la venta de equipos electronicos mismo ya mencionados anteriormente disponibles en el establecimiento asi como sobre pedido</div>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight="bold" mb="30px">
           
            About US
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
           
            Careers
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
           
            Our Stores
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            
            Terms & Conditions
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
           
            Privacy Policy
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight="bold" mb="30px">
            
            Customer Care
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            
            Help Center
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            
            Track Your Order
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            
            Corporate & Bulk Purchasing
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            
            Returns & Refunds
          </Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h3" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Hidalgo #177, El Grullo, Jalisco, Mexico
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            cellfud27@gmail.com
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            321 108 09 43
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
