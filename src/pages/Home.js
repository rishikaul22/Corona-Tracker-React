import React, { Fragment, useContext, useEffect } from "react";
import CardView from "../components/CardView";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CoronaContext from "../context/corona/coronaContext";
import Fab from '@material-ui/core/Fab';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.type === "dark" ? theme.palette.info.dark : theme.palette.info.dark,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
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


const Home = () => {
  const classes = useStyles();

  const coronaContext = useContext(CoronaContext);

  const { statewise, modeDark, setDarkMode, setLightMode } = coronaContext;
  useEffect(() => {
    modeDark ? document.body.style = 'background: black;' : document.body.style = 'background: white;';
  }, [modeDark])


  const statewisesort = statewise
    .sort(function (a, b) {
      return a.confirmed - b.confirmed;
    })
    .reverse();
  return (
    <Fragment>
      {modeDark ? (<div><h3 className='white-text center'>COVID-19 Statistics(INDIA)</h3> <hr style={{ borderColor: 'black' }}></hr> </div>) : (<div><h3 className='black-text center'>COVID-19 Statistics(INDIA)</h3> <hr></hr> </div>)
      }

      <CardView />
      <Fab disableRipple disableTouchRipple disableFocusRipple style={style} >
        {
          !modeDark ? <i className='small material-icons' style={{ cursor: 'pointer' }} onClick={() => { setDarkMode() }}>dark_mode</i>
            : <i className='small material-icons' style={{ cursor: 'pointer' }} onClick={() => { setLightMode() }}>light_mode</i>
        }
      </Fab>

      <TableContainer >
        <Table
          style={{ backgroundColor: modeDark ? "#000000" : "" }}
          className={classes.table}
          aria-label='customized table'
          align='center'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ backgroundColor: modeDark ? "#000000" : "" }}>State/UT</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: modeDark ? "#000000" : "" }} align='center'>Confirmed</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: modeDark ? "#000000" : "" }} align='center'>Active</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: modeDark ? "#000000" : "" }} align='center'>Recovered</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: modeDark ? "#000000" : "" }} align='center'>Deaths</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statewisesort.map(row => (
              <StyledTableRow key={row.state}>
                <StyledTableCell style={{ backgroundColor: modeDark ? "#303030" : "", color: modeDark ? "#ffffff" : "#000000" }} component='th' scope='row'>
                  {row.state}
                </StyledTableCell>
                <StyledTableCell style={{ backgroundColor: modeDark ? "#303030" : "", color: modeDark ? "#ffffff" : "#000000" }} align='right'>{row.confirmed}</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: modeDark ? "#303030" : "", color: modeDark ? "#ffffff" : "#000000" }} align='right'>{row.active}</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: modeDark ? "#303030" : "", color: modeDark ? "#ffffff" : "#000000" }} align='right'>{row.recovered}</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: modeDark ? "#303030" : "", color: modeDark ? "#ffffff" : "#000000" }} align='right'>{row.deaths}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment >
  );
};

export default Home;
