import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Card, CardContent } from './index';
import { Grid, GridItem } from "../Grid";
import { Eyebrow } from '../Eyebrow';
import { Image } from '../Image';
import { Flex, FlexItem } from "../Flex";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";

storiesOf("Card", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 4]}>
          <Card
            start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <Eyebrow>Eyebrow</Eyebrow>
              <h4>This is a card</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <Eyebrow>Eyebrow</Eyebrow>
              <h4>This is a card</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <Eyebrow>Eyebrow</Eyebrow>
              <h4>This is a card</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
  .add("Product", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 4]}>
          <Card
            start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <Flex alignCenter justifyBetween>
                <FlexItem><Eyebrow>Eyebrow</Eyebrow></FlexItem>
                <FlexItem>
                  <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                    <span style={{ textDecoration: 'line-through', fontSize: '1rem' }}>$39</span> $19
                  </p>
                </FlexItem>
              </Flex>
              <h4>Product Title</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
              <ButtonGroup>
                <Button variant="primary">Add to cart</Button>
                <Button variant="primary" fill="clear">Learn More</Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <Flex alignCenter justifyBetween>
                <FlexItem><Eyebrow>Eyebrow</Eyebrow></FlexItem>
                <FlexItem>
                  <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                    <span style={{ textDecoration: 'line-through', fontSize: '1rem' }}>$39</span> $19
                  </p>
                </FlexItem>
              </Flex>
              <h4>Product Title</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
              <ButtonGroup>
                <Button variant="primary">Add to cart</Button>
                <Button variant="primary" fill="clear">Learn More</Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <Flex alignCenter justifyBetween>
                <FlexItem><Eyebrow>Eyebrow</Eyebrow></FlexItem>
                <FlexItem>
                  <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                    <span style={{ textDecoration: 'line-through', fontSize: '1rem' }}>$39</span> $19
                  </p>
                </FlexItem>
              </Flex>
              <h4>Product Title</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
              <ButtonGroup>
                <Button variant="primary">Add to cart</Button>
                <Button variant="primary" fill="clear">Learn More</Button>
              </ButtonGroup>
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
              <h4>This is a card</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            background={<img src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <h4>This is a card</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem size={[12, 4]}>
          <Card
            background={<img src="https://placehold.it/345x200.png?text=Image" />}
          >
            <CardContent>
              <h4>This is a card</h4>
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
              <Eyebrow>Eyebrow</Eyebrow>
              <h4>This is a card</h4>
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
              <Eyebrow>Eyebrow</Eyebrow>
              <h4>This is a card</h4>
              <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
