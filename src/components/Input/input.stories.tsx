import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Input } from './index';
import { Grid } from "../Grid";
import { GridItem } from "../GridItem";
import { Label } from "../Label";
import { FormGroup } from "../FormGroup";
import { Textarea } from "../Textarea";
import { Select } from "../Select";
import { Option } from "../Option";
import { Container } from "../Container";

storiesOf("Input", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Container>
        <Grid>
          <GridItem size={[12, 12]}>
            <FormGroup>
              <Input id="first-name" name="first-name" required />
              <Label htmlFor="first-name">First Name</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup>
              <Input id="last-name" name="last-name" required />
              <Label htmlFor="last-name">Last Name</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup>
              <Input type="email" id="email" name="email" />
              <Label htmlFor="email">Email</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup>
              <Input type="tel" id="tel" name="tel" />
              <Label htmlFor="tel">Phone Number</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup>
              <Select label="States" id="states" name="states">
                <Option value="alabama">Alabama</Option>
                <Option value="alaska">Alaska</Option>
                <Option value="arizona">Arizona</Option>
                <Option value="arkansas">Arkansas</Option>
                <Option value="california">California</Option>
              </Select>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup>
              <Textarea id="description" name="description" rows={6} />
              <Label htmlFor="description">Textarea</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 5]}>
            <FormGroup>
              <Input type="file" id="file" name="file" multiple />
              <Label htmlFor="file">Choose A File</Label>
            </FormGroup>
          </GridItem>
        </Grid>
      </Container>
    </ThemeProvider>
  ))
  .add("Inline", () => (
    <ThemeProvider>
      <BaseStyles />
      <Container>
        <Grid>
          <GridItem size={[12, 12]}>
            <FormGroup position="inline">
              <Input id="first-name" name="first-name" required />
              <Label htmlFor="first-name">First Name</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup position="inline">
              <Input id="last-name" name="last-name" required />
              <Label htmlFor="last-name">Last Name</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup position="inline">
              <Input type="email" id="email" name="email" />
              <Label htmlFor="email">Email</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup position="inline">
              <Input type="tel" id="tel" name="tel" />
              <Label htmlFor="tel">Phone Number</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <Select position="inline" label="States" id="states" name="states" defaultValue="california">
              <Option value="alabama">Alabama</Option>
              <Option value="alaska">Alaska</Option>
              <Option value="arizona">Arizona</Option>
              <Option value="arkansas">Arkansas</Option>
              <Option value="california">California</Option>
            </Select>
          </GridItem>
        </Grid>
      </Container>
    </ThemeProvider>
  ))
  .add("Floating", () => (
    <ThemeProvider>
      <BaseStyles />
      <Container>
        <Grid>
          <GridItem size={[12, 12]}>
            <FormGroup position="floating">
              <Input id="first-name" name="first-name" />
              <Label htmlFor="first-name">First Name</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup position="floating">
              <Input id="last-name" name="last-name" />
              <Label htmlFor="last-name">Last Name</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup position="floating">
              <Input type="email" id="email" name="email" />
              <Label htmlFor="email">Email</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup position="floating">
              <Input type="tel" id="tel" name="tel" />
              <Label htmlFor="tel">Phone Number</Label>
            </FormGroup>
          </GridItem>
          <GridItem size={[12, 12]}>
            <Select label="Select A State" id="states" name="states" position="floating">
              <Option></Option>
              <Option value="alabama">Alabama</Option>
              <Option value="alaska">Alaska</Option>
              <Option value="arizona">Arizona</Option>
              <Option value="arkansas">Arkansas</Option>
              <Option value="california">California</Option>
            </Select>
          </GridItem>
          <GridItem size={[12, 12]}>
            <FormGroup position="floating">
              <Textarea id="description" name="description" rows={6} resize />
              <Label htmlFor="description">Textarea</Label>
            </FormGroup>
          </GridItem>
        </Grid>
      </Container>
    </ThemeProvider>
  ))
