import { makeObservable, observable, action } from "mobx";
import axios from "axios";
// import slugify from "react-slugify";

class VendorStore {
  vendors = [];

  constructor() {
    makeObservable(this, {
      vendors: observable,
      createVendor: action,
      //   deleteVendor: action,
      fetchVendors: action,
      //   updateVendor: action,
    });
  }

  fetchVendors = async () => {
    try {
      const response = await axios.get("http://localhost:8000/vendors");
      this.vendors = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  createVendor = async (newVendor) => {
    // newVendor.id = this.vendors[this.vendors.length - 1].id + 1;
    // newVendor.slug = slugify(newVendor.name);
    // this.vendors.push(newVendor);
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      const res = await axios.post("http://localhost:8000/vendors", formData);
      this.vendors.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //   updateVendor = async (updatedVendor) => {
  //     try {
  //       const formData = new FormData();
  //       for (const key in updatedVendor)
  //         formData.append(key, updatedVendor[key]);
  //       await axios.put(
  //         `http://localhost:8000/vendors/${updatedVendor.id}`,
  //         formData
  //       );
  //       const vendor = this.vendors.find(
  //         (vendor) => vendor.id === updatedVendor.id
  //       );
  //       for (const key in vendor) vendor[key] = updatedVendor[key];
  //       vendor.slug = slugify(vendor.name);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   deleteVendor = async (vendorId) => {
  //     console.log(vendorId);
  //     try {
  //       await axios.delete(`http://localhost:8000/vendors/${vendorId}`);
  //       this.vendors = this.vendors.filter(
  //         (vendor) => vendor.id !== vendorId
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
}

const vendorStore = new VendorStore();
vendorStore.fetchVendors();
export default vendorStore;
