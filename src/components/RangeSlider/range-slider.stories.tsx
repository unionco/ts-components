import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import RangeSlider from "./index";
import { Box, Container, Section } from '../index';
import { H1 } from '../Typography';
import { number } from "@storybook/addon-knobs";

storiesOf("Range Slider", module)
  .add("Default", () => {
    const min = 30;
    const max = 130;

    const [values, setValues] = useState([((max - min) / 2) + min]);

    const handleChange = (values: number[]) => {
      setValues(values);
    }

    return (
      <ThemeProvider>
        <BaseStyles />
        <Section>
          <Container>
            <Box m={5}>
              <RangeSlider
                min={min}
                minLabel={`${min} ft`}
                max={max}
                maxLabel={`${max} ft`}
                trackColor="primary"
                onChange={handleChange}
                values={values}
              />
            </Box>

            <Box m={5}>
              <H1 className="h4">Values:</H1>
              <pre>
                {
                  JSON.stringify(values, null, 2)
                }
              </pre>
            </Box>
          </Container>
        </Section>
      </ThemeProvider>
    );
  })
  .add("Multiple Handles", () => {
    const initialValues = [0, 120];
    const [values, setValues] = useState(initialValues);

    const handleChange = (values: number[]) => {
      setValues(values);
    }

    const label = 'Wrapper Font Size';
    const defaultValue = 16;
    const options = {
      range: true,
      min: 16,
      max: 48,
      step: 1,
    };

    const fontSize = number(label, defaultValue, options);

    return (
      <ThemeProvider>
        <BaseStyles />
        <Section>
          <Container>
            <Box m={5} fontSize={fontSize}>
              <RangeSlider
                min={initialValues[0]}
                minLabel="0 ft"
                max={initialValues[1]}
                maxLabel="120 ft"
                trackColor="primary"
                onChange={handleChange}
                values={values}
              />
            </Box>

            <Box m={5}>
              <H1 className="h4">Values:</H1>
              <pre>
                {
                  JSON.stringify(values, null, 2)
                }
              </pre>
            </Box>
          </Container>
        </Section>
      </ThemeProvider>
    );
  });
