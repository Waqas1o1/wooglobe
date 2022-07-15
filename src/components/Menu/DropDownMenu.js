import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ListItemIcon, ListItemText, Typography } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    disableScrollLock
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 220,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function MenuButton(props) {
  const {
    id,
    text,
    MenuItems,
    variant = "contained",
    color = "secondary",
    other,
    endIcon = <KeyboardArrowDownIcon />,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id={id}
        variant={variant}
        color={color}
        disableElevation
        onClick={handleClick}
        endIcon={endIcon}
        {...other}
      >
        {text}
      </Button>
      <StyledMenu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ width: "100%" }}
      >
        {MenuItems.map((menu, i) => (
          <MenuItem onClick={menu.onClick} key={i} disableRipple>
            {menu.element ? (
              <ListItemIcon>{menu.element}</ListItemIcon>
            ) : (
              undefined
            )}

            <ListItemText>{menu.title}</ListItemText>
            {menu.text ? (
              <Typography variant="body2" color="text.secondary">
                {menu.text}
              </Typography>
            ) : (
              undefined
            )}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
