import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";

export function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <InventoryIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Inventory Management
                </Typography>
            </Toolbar>
        </AppBar>
    );
}