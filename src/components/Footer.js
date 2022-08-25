import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          py: 2,
          mt:10,
          display: "flex",
          alignItems: { sm: "center" },
          justifyContent: { sm: "space-between" },
          backgroundColor: "orange",
          position: "flex",
        }}
      >
        <Typography
          color="text.secondary"
          variant="body2"
          style={{ color: "#edf5f3" }}
        >
          Copyright © {new Date().getFullYear()} Sertaç Gültekin
        </Typography>
        <Box sx={{ py: { xs: 2, sm: 0 } }}>
          <Stack spacing={2} direction="row" sx={{ textAlign: "center" }}>
            <p
              style={{
                fontWeight: "bold",
                fontFamily: "auto",
                color: "#edf5f3",
              }}
            >
              Bize Ulaşın!
            </p>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              // href="https://github.com/mui"
              aria-label="github"
              title="GitHub"
              size="medium"
            >
              <CallIcon fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              //href="https://github.com/mui"
              aria-label="github"
              title="GitHub"
              size="medium"
            >
              <EmailIcon fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mui"
              aria-label="github"
              title="GitHub"
              size="medium"
            >
              <GitHubIcon fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/MUI_hq"
              aria-label="twitter"
              title="Twitter"
              size="medium"
            >
              <TwitterIcon fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/mui/"
              aria-label="linkedin"
              title="LinkedIn"
              size="medium"
            >
              <LinkedInIcon fontSize="medium" sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
