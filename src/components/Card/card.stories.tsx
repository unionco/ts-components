import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Card, CardContent } from './index';
import { Grid, GridItem } from "../Grid";

storiesOf("Card", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 4]}>
          <Card
            start={<img src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <h1>This is a card</h1>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            start={<img src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <h1>This is a card</h1>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            start={<img src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <h1>This is a card</h1>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
  .add("Media Behind", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 4]}>
          <Card
            background={<img src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <h1>This is a card</h1>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            background={<img src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <h1>This is a card</h1>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            background={<img src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <h1>This is a card</h1>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
  .add("Row Layout", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[8]}>
          <Card
            start={<img src="https://placehold.it/345x200.png?text=Image" />}
            layout="row"
          >
            <CardContent>
              <h1>This is a card</h1>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem size={[8]}>
          <Card
            end={<img src="https://placehold.it/345x200.png?text=Image" />}
            layout="row"
          >
            <CardContent>
              <h1>This is a card</h1>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
