import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const BootstrapButton = withStyles({
  root: {
    backgroundColor: '#24AEB1',
    borderColor: '#24AEB1',
    '&:hover': {
      backgroundColor: '#24AEB1',
      borderColor: '#24AEB1',
      boxShadow: 'none',
    },
  },
})(Button);

export default function MedicineScreen() {
  const classes = useStyles();

  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      axios
        .get('http://localhost:5000/api/products/all-medicines')
        .then((data) => setProducts([...data.data]))
        .catch((err) => console.log('err from axios call ', err));
    };
    fetchData();
  }, []);

  return (
    <div
      className="container"
      style={{ flexFlow: 'column', padding: '0px 5%' }}
    >
      <div>
        <h1>Canadian Prescription Drugs - Popular Rx Medicines</h1>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Brand</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
              <StyledTableCell align="right">&nbsp; &nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <StyledTableRow key={product._id}>
                  <StyledTableCell component="th" scope="row">
                    {product.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.brand}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    $ {product.price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <BootstrapButton variant="contained" color="primary">
                      View Product
                    </BootstrapButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
