import { Vendor } from "../styles";
import { Link } from "react-router-dom";
// import DeleteButton from "./buttons/DeleteButton";
// import UpdateButton from "./buttons/UpdateButton";
import { observer } from "mobx-react";

const VendorsItem = ({ vendor }) => {
  return (
    <>
      <Vendor>
        <div>
          {/* <div className="overlay">hello</div> */}
          <Link to={`/vendors/${vendor.slug}`}>
            <img
              src={vendor.image}
              alt=""
              onMouseOver={(e) =>
                (e.currentTarget.src = vendor.ovr ? vendor.ovr : vendor.image)
              }
              onMouseOut={(e) => (e.currentTarget.src = vendor.image)}
            />
          </Link>

          <p>{vendor.name}</p>
        </div>
        {/* <UpdateButton vendor={vendor} /> */}
        {/* <DeleteButton vendorId={vendor.id} /> */}
      </Vendor>
    </>
  );
};

export default observer(VendorsItem);
