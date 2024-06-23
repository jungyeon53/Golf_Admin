import * as React from "react";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

export const Logo = React.forwardRef(({
  img = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
}) => {
  
  const LogoStyled = styled(Link)(() => ({

    whiteSpace: "nowrap",
    WebkitLineClamp: '1',
    fontSize: '2rem',
    padding: '15px 22px',
    textOverflow: 'ellipsis',
  }));

  return (
    <LogoStyled href="/">
      {
          <Box
            component="img"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            src={img}
          />
      }
    </LogoStyled>
  );
});
