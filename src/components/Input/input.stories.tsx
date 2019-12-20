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

storiesOf("Input", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 12]}>
          <FormGroup>
            <Input id="first-name" name="first-name" required/>
            <Label htmlFor="first-name">First Name</Label>
          </FormGroup>
        </GridItem>
        <GridItem size={[12, 12]}>
          <FormGroup>
            <Input id="last-name" name="last-name" required/>
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
            <Label htmlFor="states">State</Label>
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
            <Input type="file" id="file" name="file" multiple/>
            <Label htmlFor="file">Choose A File</Label>
          </FormGroup>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
  .add("Inline", () => (
    <ThemeProvider>
      <BaseStyles />
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
          <FormGroup position="inline">
            <Select label="States" id="states" name="states" selectedValue="california">
              <Option value="alabama">Alabama</Option>
              <Option value="alaska">Alaska</Option>
              <Option value="arizona">Arizona</Option>
              <Option value="arkansas">Arkansas</Option>
              <Option value="california">California</Option>
            </Select>
            <Label htmlFor="option">State</Label>
          </FormGroup>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
  .add("Floating", () => (
    <ThemeProvider>
      <BaseStyles />
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
          <FormGroup position="floating">
            <Select label="States" id="states" name="states" floating>
              <Option disabled>Select A State</Option>
              <Option value="alabama">Alabama</Option>
              <Option value="alaska">Alaska</Option>
              <Option value="arizona">Arizona</Option>
              <Option value="arkansas">Arkansas</Option>
              <Option value="california">California</Option>
            </Select>
            <Label htmlFor="option">State</Label>
          </FormGroup>
        </GridItem>
        <GridItem size={[12, 12]}>
          <FormGroup position="floating">
            <Textarea id="description" name="description" rows={6} resize/>
            <Label htmlFor="description">Textarea</Label>
          </FormGroup>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
