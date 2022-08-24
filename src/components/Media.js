import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Grid } from '@mui/material';



export default function BasicCard() {
  return (
    <Grid container spacing={2} sx={{ml:3, mt:1}}>
      <Grid>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, mt: 5, ml: 5}}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1}}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            
          >
            <source
              src="https://static.videezy.com/system/resources/previews/000/005/096/original/Silky_Blue_4K_Motion_Background_Loop.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            
          >
            <source
              src="https://static.videezy.com/system/resources/previews/000/038/716/original/alb_cldfx0303_1080p.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      
    </Box>
    </Grid>
    <Grid>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, mt: 5, ml: 5}}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1}}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            
          >
            <source
              src="https://static.videezy.com/system/resources/previews/000/005/096/original/Silky_Blue_4K_Motion_Background_Loop.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            
          >
            <source
              src="https://static.videezy.com/system/resources/previews/000/038/716/original/alb_cldfx0303_1080p.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      
    </Box>
    </Grid>
    </Grid>
    
    
    
  );
}