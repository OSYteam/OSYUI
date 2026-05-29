import { FC } from "react";
import { Paper, ButtonGroup, Button } from "@mui/material";

type Platform = "yemeksepeti" | "getir" | "trendyol" | "migros" | "all";

const getPlatformColor = (platform: Platform) => {
  switch (platform) {
    case "yemeksepeti":
      return "#ff0000";
    case "getir":
      return "#5d3ebc";
    case "trendyol":
      return "#f27a1a";
    case "migros":
      return "#ff6600";
    default:
      return "#666";
  }
};

const getButtonStyles = (platform: Platform, selectedPlatform: Platform) => {
  const isSelected = platform === selectedPlatform;
  const color = getPlatformColor(platform);

  return {
    backgroundColor: color,
    color: "white",
    borderRadius: "15px !important",
    transform: isSelected ? "scale(.9)" : "scale(.8)",
    boxShadow: isSelected ? `0 0 12px ${color}` : "0 2px 5px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(.9)",
      opacity: 1,
    },
  };
};

interface PlatformFiltersProps {
  selectedPlatform: Platform;
  onPlatformChange: (platform: Platform) => void;
  orderCounts: {
    all: number;
    yemeksepeti: number;
    getir: number;
    trendyol: number;
    migros: number;
  };
}

const PlatformFilters: FC<PlatformFiltersProps> = ({
  selectedPlatform,
  onPlatformChange,
  orderCounts,
}) => {
  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <ButtonGroup
        variant="outlined"
        sx={{ flexWrap: "wrap", gap: 1 }}
        color="inherit"
      >
        <Button
          variant={selectedPlatform === "all" ? "contained" : "outlined"}
          onClick={() => onPlatformChange("all")}
          sx={getButtonStyles("all", selectedPlatform)}
        >
          Tümü ({orderCounts.all})
        </Button>

        <Button
          onClick={() => onPlatformChange("yemeksepeti")}
          sx={getButtonStyles("yemeksepeti", selectedPlatform)}
        >
          Yemeksepeti ({orderCounts.yemeksepeti})
        </Button>

        <Button
          variant={selectedPlatform === "getir" ? "contained" : "outlined"}
          onClick={() => onPlatformChange("getir")}
          sx={getButtonStyles("getir", selectedPlatform)}
        >
          Getir Yemek ({orderCounts.getir})
        </Button>

        <Button
          variant={selectedPlatform === "trendyol" ? "contained" : "outlined"}
          onClick={() => onPlatformChange("trendyol")}
          sx={getButtonStyles("trendyol", selectedPlatform)}
        >
          Trendyol Yemek ({orderCounts.trendyol})
        </Button>

        <Button
          variant={selectedPlatform === "migros" ? "contained" : "outlined"}
          onClick={() => onPlatformChange("migros")}
          sx={getButtonStyles("migros", selectedPlatform)}
        >
          Migros Yemek ({orderCounts.migros})
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default PlatformFilters;
