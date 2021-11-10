import React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function MobileMenu() {
    return (
        <Paper sx={{ width: 320,mt:20 }}>
            <MenuList dense>
                <MenuItem>
                    <ListItemText inset>Single</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText inset>1.15</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText inset>Double</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}
