import React from "react";
import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Link,
  Container,
  Toolbar,
  Stack,
  Grid,
  CardContent,
  CardActions,
} from "@mui/material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardComponent = () => {
  return (
    <Container sx={{ py: 0 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((items) => (
          <Grid item key={items} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>Heading</Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardComponent;
