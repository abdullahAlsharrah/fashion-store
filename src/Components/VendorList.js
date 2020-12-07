import VendorsItems from "./VendorItem";
// import vendors from "./Vendors";
import { Container } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";
import { observer } from "mobx-react";
import vendorStore from "../stores/vendorStore";

const VendorList = () => {
  const [query, setQuery] = useState("");

  const vendorslist = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorsItems vendor={vendor} key={vendor.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <Container>{vendorslist}</Container>
    </>
  );
};

export default observer(VendorList);
