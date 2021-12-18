import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "4px !important",
    },
  },
  paper: {
    padding: "4px !important",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0 !important",
  },
  buttonSubmit: {
    margin: "4px 0 !important",
  },
}));
