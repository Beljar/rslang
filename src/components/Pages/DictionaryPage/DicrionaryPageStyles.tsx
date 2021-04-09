import { makeStyles } from "@material-ui/core/styles";

const dictionaryStyles = makeStyles({
  dictionaryContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: "1em",
  },

  dictionaryMenu: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dictionaryMenuItem: {
    border: "none",
    background: "none",
    borderBottom: "3px solid #1665B4",
    fontWeight: "bold",
    color: "#1665B4",
    width: "32%",
    textAlign: "center",
    padding: "20px",
    fontSize: "23px",
    cursor: "pointer",
    outline: "none",
  },

  cards: {
    display: "flex",
    flexDirection: "column",
    rowGap: "3em",
  },
});

export default dictionaryStyles;