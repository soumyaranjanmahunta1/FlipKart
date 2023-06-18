import React from 'react'

import { InputBase,Box} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <Box
      sx={{
        background: "#fff",
        width: "34%",
        borderRadius: "1px",
        marginLeft: "10px",
        display: "flex",
        fontSize:"unset"
      }}
    >
      <InputBase
        sx={{ width: "100%", paddingLeft: "20px" }}
        placeholder="Search for products, brands and more"
      />
      <Box>
              <SearchIcon sx={{
                  color: "#2874F0", padding: "4px" }} />
      </Box>
    </Box>
  );
}
