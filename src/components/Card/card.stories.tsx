import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Card, CardContent } from './index';

storiesOf("Card", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <div style={{ display: 'flex' }}>
        <Card
          start={<img src="https://placehold.it/345x200.png?text=Image" />}
        >
          <CardContent>
            <h1>This is a card</h1>
            <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
          </CardContent>
        </Card>
        <Card
          background={<img src="https://placehold.it/345x200.png?text=Image" />}
        >
          <CardContent>
            <h1>This is a card</h1>
            <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
          </CardContent>
        </Card>
      </div>

      <Card
        start={<img src="https://placehold.it/345x200.png?text=Image" />}
        layout="row"
      >
        <CardContent>
          <h1>This is a card</h1>
          <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
        </CardContent>
      </Card>
      <Card
        end={<img src="https://placehold.it/345x200.png?text=Image" />}
        layout="row"
      >
        <CardContent>
          <h1>This is a card</h1>
          <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</p>
        </CardContent>
      </Card>
    </ThemeProvider>
  ))
