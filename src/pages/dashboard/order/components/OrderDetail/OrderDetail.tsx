// import { Box, Card, CardContent, Typography, Divider, List, ListItem, ListItemText } from "@mui/material"

// const order = {
//   orderNumber: "1221047877",
//   customer: {
//     firstName: "Ali",
//     lastName: "Y",
//   },
//   totalPrice: 40.99,
//   deliveryType: "GO",
//   callCenterPhone: "0212 365 34 03",
//   lines: [
//     {
//       name: "İkili Hamburger Menü",
//       price: 34.99,
//       modifierProducts: [
//         { name: "Et Burger" },
//         { name: "Tavuk Burger" },
//         { name: "Patates Kızartması (Büyük Boy)" },
//       ],
//     },
//   ],
//   eta: "32 - 47 dk"
// };

// const OrderDetail = () => {
//   return (
//     <Box
//       m={2}
//       sx={{
//         height: "100%",
//         width: "30%",
//         ml: 2
//       }}
//     >
//       <Card sx={{ height: "auto", m: 1, p: 2 }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Sipariş Detayı
//           </Typography>

//           <Typography variant="subtitle2" color="text.secondary">
//             Sipariş Numarası: {order.orderNumber}
//           </Typography>

//           <Typography variant="subtitle2" color="text.secondary">
//             Müşteri: {order.customer.firstName} {order.customer.lastName}
//           </Typography>

//           <Typography variant="subtitle2" color="text.secondary">
//             Teslimat Tipi: {order.deliveryType === "GO" ? "Restoran Kurye" : "Mağaza"}
//           </Typography>

//           <Typography variant="subtitle2" color="text.secondary">
//             Tahmini Süre: {order.eta}
//           </Typography>

//           <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
//             Çağrı Merkezi: {order.callCenterPhone}
//           </Typography>

//           <Divider sx={{ my: 2 }} />

//           <Typography variant="subtitle1" gutterBottom>
//             Ürünler
//           </Typography>

//           <List dense>
//             {order.lines.map((line, i) => (
//               <Box key={i}>
//                 <ListItem>
//                   <ListItemText
//                     primary={`${line.name} - ${line.price.toFixed(2)}₺`}
//                     secondary={`Alt Ürünler: ${line.modifierProducts.map(mp => mp.name).join(", ")}`}
//                   />
//                 </ListItem>
//                 {i < order.lines.length - 1 && <Divider />}
//               </Box>
//             ))}
//           </List>

//           <Divider sx={{ my: 2 }} />

//           <Typography variant="h6" color="primary">
//             Toplam: {order.totalPrice.toFixed(2)}₺
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   )
// }

// export default OrderDetail;
import { Box, Card, CardContent, Typography, Divider } from "@mui/material";

const OrderDetail = ({ order }: { order: any }) => {
  if (!order) {
    return (
      <Box m={2} sx={{ width: "30%", ml: 2 }}>
        <Card sx={{ p: 2 }}>
          <CardContent>
            <Typography variant="h6">Sipariş seçiniz</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box m={2} sx={{ width: "30%", ml: 2 }}>
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Sipariş Detayı
          </Typography>

          <Typography variant="subtitle2">
            Sipariş Numarası: {order.orderNumber}
          </Typography>
          <Typography variant="subtitle2">
            Müşteri: {order.customer.firstName} {order.customer.lastName}
          </Typography>
          <Typography variant="subtitle2">
            Teslimat Tipi: {order.deliveryType === "GO" ? "Restoran Kurye" : "Mağaza"}
          </Typography>
          <Typography variant="subtitle2">Tahmini Süre: {order.eta}</Typography>
          <Typography variant="subtitle2">Toplam: {order.totalPrice.toFixed(2)}₺</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderDetail;

