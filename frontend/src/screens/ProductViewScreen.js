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

export default function ProductViewScreen() {
  return (
    <div
      className="container"
      style={{ flexFlow: 'column', padding: '0px 5%' }}
    >
      <div>
        <h1>ProductViewScreen</h1>
      </div>
    </div>
  );
}
