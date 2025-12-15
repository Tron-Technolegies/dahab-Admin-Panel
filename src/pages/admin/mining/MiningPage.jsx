import React, { useState } from "react";
import MiningSections from "../../../components/Admin/mining/MiningSections";
import RevenueSection from "../../../components/Admin/mining/RevenueSection/RevenueSection";
import PayoutSection from "../../../components/Admin/mining/Payout/PayoutSection";
import BTCPerHashRate from "../../../components/Admin/mining/BTC/BTCPerHashRate";
import S19KRevenueSection from "../../../components/Admin/mining/S19KRevenue/S19KRevenueSection";
import TermsSection from "../../../components/Admin/mining/terms/TermsSection";
import PrivacySection from "../../../components/Admin/mining/privacy/PrivacySection";
import NotificationSection from "../../../components/Admin/mining/notifications/NotificationSection";
import MiningUsersSection from "../../../components/Admin/mining/users/MiningUsersSection";
import A1246Uptime from "../../../components/Admin/mining/A1246Uptime/A1246Uptime";
import MinersSection from "../../../components/Admin/mining/miners/MinersSection";
import VoucherSection from "../../../components/Admin/mining/vouchers/VoucherSection";
import OwnedMiners from "../../../components/Admin/mining/owned/OwnedMiners";

export default function MiningPage() {
  const [active, setActive] = useState("voucher");
  return (
    <div>
      <MiningSections active={active} setActive={setActive} />
      {active === "A1246 Revenue" && <RevenueSection />}
      {active === "S19KPro Revenue" && <S19KRevenueSection />}
      {active === "Payout" && <PayoutSection />}
      {active === "BTC" && <BTCPerHashRate />}
      {active === "A1246 Uptime" && <A1246Uptime />}
      {active === "T&C" && <TermsSection />}
      {active === "privacy" && <PrivacySection />}
      {active === "notifications" && <NotificationSection />}
      {active === "users" && <MiningUsersSection />}
      {active === "miners" && <MinersSection />}
      {active === "voucher" && <VoucherSection />}
      {active === "owned" && <OwnedMiners />}
    </div>
  );
}
