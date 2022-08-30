import React from "react";
import iki from "../assets/iki.jpg";
import AboutLayout from "../layout/AboutLayout";
import Typography from '@mui/material/Typography';



function About() {



  return (

    <AboutLayout
      sxBackground={{
        backgroundImage: `url(${iki})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
     {/*  <img
        style={{ display: 'none' }}
        src={about1}
        alt="increase priority"

      /> */}
      <Typography mt="auto" color="inherit" align="center" variant="h2" marked="center">
        Bizi Keşfedin
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Henüz yolda iken size uygun dönüş yüklerinden haberdar olabilirsiniz.
        Aracınıza uygun yüklere teklif verebilirsiniz.
        Yükleme noktasına navigasyon desteği alabilirsiniz.
        Hiçbir komisyon ücreti ödemeden yükü alabilirsiniz.
        Taşıma ve yük teslimi sırasında oluşacak tüm srounları tek tıkla bildirebilirsiniz.
        Carvel üzerinden e-fatura kesebilirsiniz.
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Tecrübeyi Deneyimleyin
      </Typography>
    </AboutLayout>
  )

}
export default About;