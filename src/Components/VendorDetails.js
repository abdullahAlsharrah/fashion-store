import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import vendorStore from "../stores/vendorStore";
import { observer } from "mobx-react";
import UpdateButton from "./buttons/UpdateButton";

const VendorDetails = () => {
  const vendorName = useParams().vendorName;
  const vendor = vendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorName
  );

  if (!vendor) return <Redirect to="/vendors" />;

  return (
    <>
      <DetailWrapper>
        <img src={vendor.image} alt={vendor.name} />
        <h1>{vendor.name}</h1>
        <hr />
        <div></div>
        <UpdateButton vendor={vendor} />
        <DeleteButton vendorId={vendor.id} />
      </DetailWrapper>
    </>
  );
};

export default observer(VendorDetails);
