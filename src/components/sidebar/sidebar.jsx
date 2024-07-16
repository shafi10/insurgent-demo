import clientImg from "../../assets/clients.png";
import aiAnalysisImg from "../../assets/aianalysis.png";
import dashboard from "../../assets/dashboard.png";
import insurance from "../../assets/insurance.png";
import notification from "../../assets/notification.png";
import support from "../../assets/support.png";
import settings from "../../assets/settings.png";
import user from "../../assets/user.png";
import logout from "../../assets/log_out.png";
import companyLogo from "../../assets/company_logo.png";
import "./sidebar.css";

export function Sidebar() {
  const sidebarTopList = [
    {
      title: "Clients",
      icon: clientImg,
    },
    {
      title: "AI Analysis",
      icon: aiAnalysisImg,
    },
    {
      title: "Dashboard",
      icon: dashboard,
    },
    {
      title: "Insurance Portfolio",
      icon: insurance,
    },
  ];

  const sidebarBottomList = [
    {
      title: "Notifications",
      icon: notification,
    },
    {
      title: "Support",
      icon: support,
    },
    {
      title: "Settings",
      icon: settings,
    },
    {
      title: "David Lovejoy",
      icon: user,
    },
    {
      title: "Logout",
      icon: logout,
    },
  ];

  return (
    <div className="sidebar__container">
      <div className="company__logo">
        <img src={companyLogo} alt="company logo" />
      </div>
      <div className="sidebar__container_list">
        <div className="sidebar__top_list">
          {sidebarTopList?.map((item, index) => (
            <div key={index} className="sidebar__container_item">
              <img
                src={item?.icon}
                alt="sidebar icon"
                className="sidebar__container_item_image"
              />
              <div className="sidebar__container_item_title">{item?.title}</div>
            </div>
          ))}
        </div>
        <div className="sidebar__bottom_list">
          {sidebarBottomList?.map((item, index) => (
            <div key={index} className="sidebar__container_item">
              <img
                src={item?.icon}
                alt="sidebar icon"
                className="sidebar__container_item_image"
              />
              <div className="sidebar__container_item_title">{item?.title}</div>
              {index === 0 && (
                <span className="sidebar__container_item_notification">3</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
