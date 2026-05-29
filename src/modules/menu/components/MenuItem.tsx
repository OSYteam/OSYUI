import { FC } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export interface MenuItem {
  title: string;
  subtitle: string;
  imgUrl: string;
}

interface MenuItemProps {
  item: MenuItem;
}

const MenuItemCard: FC<MenuItemProps> = ({ item }) => {
  return (
    <Card
      sx={{
        width: 280,
        borderRadius: 3,
        transition: "all 0.2s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={item.imgUrl}
        alt={item.title}
      />

      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom noWrap>
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
