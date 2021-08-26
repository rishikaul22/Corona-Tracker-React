import React, { useContext, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CoronaContext from '../context/corona/coronaContext';
import Spinner from '../components/Spinner';
import { Fab } from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginBottom: 50,
    marginTop: 50,
    width: "auto"
  }
});
const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  backgroundColor: 'grey'
};

export default function CustomizedTables() {
  const classes = useStyles();

  const coronaContext = useContext(CoronaContext);

  const { getHelp, help, loading, setLoading, modeDark, setDarkMode, setLightMode } = coronaContext;
  useEffect(() => {
    setLoading();
    getHelp();
    // eslint-disable-next-line
  }, []);
  console.log('help', help);
  console.log('loading', loading);
  const { regional, primary } = help;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {modeDark ?
        <div className='white-text' align='center'>
          <h5>Ministry of Health & Welfare</h5>
          <p>Number : {primary.number}</p>
          <p>Toll-Free : 1075</p>
          <p>E-Mail : {primary.email}</p>
        </div> :
        <div align='center'>
          <h5>Ministry of Health & Welfare</h5>
          <p>Number : {primary.number}</p>
          <p>Toll-Free : 1075</p>
          <p>E-Mail : {primary.email}</p>
        </div>
      }
      <Fab disableRipple disableTouchRipple disableFocusRipple style={style} >
        {
          !modeDark ? <i className='small material-icons' style={{ cursor: 'pointer' }} onClick={() => { setDarkMode() }}>dark_mode</i>
            : <i className='small material-icons' style={{ cursor: 'pointer' }} onClick={() => { setLightMode() }}>light_mode</i>
        }
      </Fab>
      <TableContainer >
        <Table
          className={classes.table}
          aria-label='customized table'
          align='center'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ backgroundColor: modeDark ? "#000000" : "" }}>State/UT</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: modeDark ? "#000000" : "" }} align='center'>Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {regional.map(row => (
              <StyledTableRow key={row.loc}>
                <StyledTableCell style={{ backgroundColor: modeDark ? "#303030" : "", color: modeDark ? "#ffffff" : "#000000" }} component='th' scope='row'>
                  {row.loc}
                </StyledTableCell>
                <StyledTableCell style={{ backgroundColor: modeDark ? "#303030" : "", color: modeDark ? "#ffffff" : "#000000" }} align='right'>{row.number}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
