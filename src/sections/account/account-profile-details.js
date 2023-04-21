import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

const states = [
  {
    value: 'Restaurants',
    label: 'Restaurants'
  },
  {
    value: 'Retail',
    label: 'Retail'
  },
  {
    value: 'Housing',
    label: 'Housing'
  },
  {
    value: 'Travel',
    label: 'Travel'
  },
  {
    value: 'Electronics',
    label: 'Electronics'
  },
  {
    value: 'Auto',
    label: 'Auto & Gas'
  },
  {
    value: 'Personal',
    label: 'Personal Care'
  },
  {
    value: 'Transportation',
    label: 'Transportation'
  },
  {
    value: 'Groceries',
    label: 'Groceries'
  },
  {
    value: 'Entertainment',
    label: 'Entertainment'
  },
  {
    value: 'Utilities',
    label: 'Utilities'
  },
  {
    value: 'Unknown',
    label: 'Unknown'
  }
];

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: 'Restaurants',
    country: ''
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Input Expense Information"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Merchant name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Date"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Price"
                  name="email"
                  onChange={handleChange}
                  required
                  type="number"
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Address"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                />
              </Grid>
              
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select Category"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Submit Data
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
