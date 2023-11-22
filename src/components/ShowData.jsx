import {
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import {CheckBox} from '@mui/material/Checkbox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 15,
    fontWeight:700
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 10,
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const ShowData = () => {
  const [data, setData] = useState([]);
  const [serialNumber, setSerailNumber] = useState(0);
  const [editData, setEditData] = useState({});
  // const [alertMsg,setAlertMsg]=useState("")

  const getApi = async () => {
    const result = await axios.get("http://localhost:8888/emp");
    setData(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleDelete = async (item) => {
    const shouldRemove = window.confirm("Delete Confirm");
    if (shouldRemove) {
      await axios.delete(`http://localhost:8888/delemp/${item._id}`);
      getApi();
      toast.success(`${item.fname} ${item.lname} Deleted Successfully!!!`)
      // setAlertMsg(item)
    }
  };

  const handleUpdate = async (_id) => {
    // console.log("id",_id);
    const updateData = editData[_id];
    console.log("updateData", updateData);
    await axios.put(`http://localhost:8888/updateemp/${_id}`, updateData);
    setEditData((prevData) => ({
      ...prevData,
      [_id]: undefined, // Clear the edit state for this item after updating
    }));
    getApi();

    // const updatedEmplooye = data.find((item)=> item._id === _id)
    toast.success(`Contact is Updated Successfully!!!!`)
  };

  const toggleEdit = (_id) => {
    // Toggle the edit state for the specific item
    setEditData((prevData) => ({
      ...prevData,
      [_id]: !prevData[_id],
    }));
  };

  const handleEditChange = (_id, field, value) => {
    // Update the specific field for the specific item
    setEditData((prevData) => ({
      ...prevData,
      [_id]: {
        ...prevData[_id],
        [field]: value,
      },
    }));
  };

  // const handleUpdate = async (_id) => {
  //   const updatedData = editData[_id];
  //   await axios.put(`http://localhost:8888/updateemp/${_id}`, updatedData);
  //   setEditData((prevEditData) => ({
  //     ...prevEditData,
  //     [_id]: undefined, // Clear the edit state for this item after updating
  //   }));
  //   getApi();
  // };
  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
            <StyledTableCell></StyledTableCell>
              <StyledTableCell>Serial No.</StyledTableCell>
              <StyledTableCell>Emplooye Id</StyledTableCell>
              <StyledTableCell>Fullname</StyledTableCell>
              <StyledTableCell sx={{ textAlign: "center" }}>
                Email Id
              </StyledTableCell>
              <StyledTableCell>Mobile No.</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell>
                 <Checkbox {...label}/>
                </StyledTableCell>
                <StyledTableCell>{serialNumber + index + 1}</StyledTableCell>
                <StyledTableCell>
                  {editData[item._id] ? (
                    <TextField
                      size="small"
                      variant="outlined"
                      fullWidth
                      value={editData[item._id]?.empid || item.empid}
                      onChange={(e) =>
                        handleEditChange(item._id, "empid", e.target.value)
                      }
                    />
                  ) : (
                    item.empid
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  {editData[item._id] ? (
                    <div>
                      <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        value={editData[item._id]?.fname || item.fname}
                        onChange={(e) =>
                          handleEditChange(item._id, "fname", e.target.value)
                        }
                        />
                      <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        value={editData[item._id]?.lname || item.lname}
                        onChange={(e) =>
                          handleEditChange(item._id, "lname", e.target.value)
                        }
                      />
                    </div>
                  ) : (
                    `${item.fname} ${item.lname}`
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  {editData[item._id] ? (
                    <TextField
                      size="small"
                      variant="outlined"
                      fullWidth
                      value={editData[item._id]?.email || item.email}
                      onChange={(e) =>
                        handleEditChange(item._id, "email", e.target.value)
                      }
                    />
                  ) : (
                    item.email
                    )}
                </StyledTableCell>
                <StyledTableCell>
                  {editData[item._id] ? (
                    <TextField
                      size="small"
                      variant="outlined"
                      fullWidth
                      value={editData[item._id]?.mobile || item.mobile}
                      onChange={(e) =>
                        handleEditChange(item._id, "mobile", e.target.value)
                      }
                      />
                  ) : (
                    item.mobile
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  {editData[item._id] ? (
                    <TextField
                      size="small"
                      variant="outlined"
                      fullWidth
                      value={editData[item._id]?.city || item.city}
                      onChange={(e) =>
                        handleEditChange(item._id, "city", e.target.value)
                      }
                      />
                  ) : (
                    item.city
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  {editData[item._id] ? (
                    <Button
                      onClick={() => handleUpdate(item._id)}
                      variant="contained"
                      fullWidth
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      onClick={() => toggleEdit(item._id)}
                      variant="contained"
                      fullWidth
                    >
                    <EditIcon/>
                    </Button>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={() => handleDelete(item)}
                    variant="contained"
                    fullWidth
                    color="error"
                    >
                    Delete 
                    <DeleteOutlineOutlinedIcon/>
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer position="top-center"/>
    </>
  );
};

export default ShowData;
