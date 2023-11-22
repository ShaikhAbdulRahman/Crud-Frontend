import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEmp = () => {
  const [empData, setEmpData] = useState({
    empid: "",
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e) => {
    setEmpData({ ...empData, [e.target.name]: e.target.value });
  };

  const handleSubmit=async()=>{
    await axios.post("http://localhost:8888/addemp/",empData)
    .then((res)=>{
      console.log(res);
    })
    toast.success(`${empData.fname} ${empData.lname} is added successfully!!!`)
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <Card sx={{marginTop:4}}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => handleChange(e)}
              size="small"
              name="empid"
              variant="outlined"
              fullWidth
              label="Emplooye Id"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => handleChange(e)}
              size="small"
              name="fname"
              variant="outlined"
              fullWidth
              label="First Name"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => handleChange(e)}
              size="small"
              name="lname"
              variant="outlined"
              fullWidth
              label="First Last"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => handleChange(e)}
              size="small"
              name="email"
              variant="outlined"
              fullWidth
              label="Email Id"
              type="email"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => handleChange(e)}
              size="small"
              name="mobile"
              variant="outlined"
              fullWidth
              label="Mobile No."
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => handleChange(e)}
              size="small"
              name="city"
              variant="outlined"
              fullWidth
              label="City"
            />
          </Grid>
          <Grid item xs={1.5}>
            <Button onClick={handleSubmit} variant="contained" fullWidth size="medium">
              Submit
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button variant="contained" fullWidth size="medium" color="warning">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ToastContainer position="top-center"/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddEmp;
