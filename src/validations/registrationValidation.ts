import * as Yup from "yup";

export const trainerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  location: Yup.string().required("Location is required"),
  experience: Yup.number()
    .typeError("Experience must be a number")
    .positive("Experience must be greater than 0")
    .required("Experience is required"),
  specialization: Yup.string().required("Specialization is required"),
  pricePerClass: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price per class is required"),
});

export const companyValidationSchema = Yup.object().shape({
  name: Yup.string().required("Company name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  location: Yup.string().required("Location is required"),
  enquirerName: Yup.string().required("Enquirer name is required"),
  areaOfTraining: Yup.string().required("Area of training is required"),
  pricePerSession: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price per session is required"),
});

export const hotelValidationSchema = Yup.object().shape({
  name: Yup.string().required("Hotel/Resort name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  location: Yup.string().required("Location is required"),
  maxPax: Yup.number()
    .typeError("Maximum pax must be a number")
    .positive("Maximum pax must be greater than 0")
    .required("Maximum pax is required"),
  totalRooms: Yup.number()
    .typeError("Total rooms must be a number")
    .positive("Total rooms must be greater than 0")
    .required("Total rooms is required"),
  facilities: Yup.string().required("Facilities are required"),
});
