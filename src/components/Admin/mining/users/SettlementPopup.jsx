import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSettleBalance } from "../../../../hooks/adminMining/useSettleBalance";

export default function SettlementPopup({ open, handleClose, userId }) {
  const { isPending, mutateAsync } = useSettleBalance();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Settle Wallet Balance"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure to deduct the pending wallet from the users current BTC
          balance
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button
          disabled={isPending}
          onClick={async () => {
            await mutateAsync({ id: userId });
            handleClose();
          }}
        >
          {isPending ? "Deducting..." : "Deduct"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
