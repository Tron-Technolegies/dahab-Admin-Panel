import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDeleteVoucher } from "../../../../hooks/adminMining/useVoucher";

export default function VoucherCard({
  name,
  code,
  description,
  discount,
  validity,
  applicable,
  minimum,
  id,
}) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { isPending, deleteVoucher } = useDeleteVoucher();
  return (
    <div className="w-full min-h-[350px] p-5 rounded-md bg-gray-300 shadow-md flex flex-col gap-2">
      <p className="text-blue-900 font-bold text-lg">{name}</p>
      <p className="text-3xl font-semibold">{discount} % OFF</p>
      <p>{description}</p>
      <p className="font-semibold">
        Code - <span className="text-lg italic">{code}</span>
      </p>
      <div className="flex flex-col item-center">
        <p>
          - <span className="font-semibold">Valid till:</span>{" "}
          {validity.toString().slice(0, 10)}
        </p>
        <p>
          - <span className="font-semibold">Applicable for:</span> {applicable}
        </p>
        <p>
          - <span className="font-semibold">Min-spent:</span> {minimum}
        </p>
      </div>
      <div className="flex gap-5 items-center self-end">
        <Link to={"/admin/mining/voucher/edit/" + id} className="text-xl">
          <GrEdit />
        </Link>
        <button className="text-2xl text-red-500" onClick={handleClickOpen}>
          <MdDeleteOutline />
        </button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Coupon"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You Sure Want To Delete This Coupon ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={async () => deleteVoucher(id)}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
