import { FC, useEffect, useRef, useState } from "react";
import { Box, ButtonBase, TextField } from "@mui/material";
import { SearchOutlinedIcon } from "./styled";

import { useRouter } from "next/router";
import axios from "axios";


const Button = () => {
  return <ButtonBase type="submit" sx={{borderRadius: 99999}}>
    <SearchOutlinedIcon fontSize="small" sx={{cursor: "pointer"}} role="button"  />
  </ButtonBase>
}


const SearchInputWithCategory: FC = () => {
  const parentRef = useRef();

  const [resultList, setResultList] = useState<string[]>([]);

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      // axios
      //   .post("http://localhost:4000/cartItems", searchQuery)
      //   .then((response) => console.log(response.data))
      //   .catch((err) => console.log(err));
      router.push(`/search?Name=${searchQuery}`);
    }
  };

  const handleDocumentClick = () => setResultList([]);

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", null);
  }, []);

  // CATEGORY MENU DROPDOWN

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{ ref: parentRef }}
    >
      <form onSubmit={handleSearch}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            sx: {
              height: 44,
              paddingRight: 0,
              borderRadius: 300,
              color: "grey.700",
              overflow: "hidden",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
            },

            startAdornment: <Button/>
          }}
        />
      </form>
      {/* {data.length > 0 && (
        <SearchResultCard elevation={2}>
          {data.map((d, i) => (
            <Link href={`product/${d.URLKey}`} key={i}>
              <MenuItem key={i}>{d.Name}</MenuItem>
            </Link>
          ))}
        </SearchResultCard>
      )} */}
    </Box>
  );
};

export default SearchInputWithCategory;
