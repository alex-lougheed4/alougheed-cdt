import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useTheme } from "@mui/material";
import { menuItems } from "./NavBarInputData";

const pages = ["About", "Services", "Contact"];

function ResponsiveAppBar() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | {
    [x: number]: HTMLElement;
  }>(null);

  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ marginBottom: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Home
          </Button>
          {/*small display*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={`/${page}`}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*standard display*/}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.keys(menuItems).map((item, index) => (
              <>
                <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                  {item}
                </Button>
                <Menu
                  anchorEl={anchorEl && anchorEl[index]}
                  keepMounted
                  open={Boolean(anchorEl) && Boolean(anchorEl![index])}
                  onClose={handleClose}
                  /* getContentAnchorEl={null} */
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  color={theme.palette.primary.main}
                >
                  {menuItems[item].map((menuitems, menuindex) => (
                    <MenuItem
                      key={menuindex}
                      selected={menuitems === item}
                      onClick={handleClose}
                      component={Link}
                      href={menuitems.path}
                    >
                      {menuitems.title}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ))}
            <Button
              component="a"
              href="/contact"
              sx={{
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

//<Button id="menuButton" onClick={handleClick}>
//          <MenuIcon />
//        </Button>
//        <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
//          <MenuItem onClick={handleClose}>Home</MenuItem>
//          <MenuItem onClick={handleClose}>About</MenuItem>
//          <MenuItem onClick={handleClose}>Contact</MenuItem>
//        </Menu>
