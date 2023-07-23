import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { RootState } from '../../redux/store';


function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function NavBar() {

  const favoriteList = useSelector((state:RootState) => state.products.favorites)
  const cartList = useSelector((state:RootState) => state.products.cart)

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <div className="navBar">
      <div className='firstBox'>
            <Box
      sx={{
        '& > :not(style)': {
          m: 20,
        },
      }}
      >
      <Link to="/">
       <HomeIcon />  
      </Link>
      <Link to="products">
        <ShoppingBagIcon />
      </Link>
      <Link to="about">
        About us
      </Link>
      </Box>
      </div>
      <div className='secondBox'>
      <Box
      sx={{
        '& > :not(style)': {
          m: 5,
        },
      }}
      >
      <Link to="favorites">
      <StyledBadge  badgeContent={favoriteList.length} color="secondary">
        <FavoriteIcon />
      </StyledBadge>
      </Link>
      <Link to="cart">
      <StyledBadge  badgeContent={cartList.length} color="primary">
        <ShoppingCartCheckoutIcon />
      </StyledBadge>
      </Link>
    </Box>
    </div>
    </div>
  );
}