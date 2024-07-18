import { useEffect } from "react";
import { Button } from "../button/button";
import { Header } from "../header/header";
import deleteImg from "../../assets/delete.png";
import selectImg from "../../assets/select.png";
import sortImg from "../../assets/sort.png";
import downarrowImg from "../../assets/downarrow.png";
import viewdetailsImg from "../../assets/viewdetails.png";
import aireviewImg from "../../assets/aireview.png";

import "./dashboard.css";

import { getAllUsers } from "../../restAPI/getUsersAPI";
import { useState } from "react";

export function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <div className="app__dashboard_content">
      <Header />
      <div className="dashboard_container">
        <div className="dashboard__header">
          <div className="dashboard__header_title">Review Client Entries</div>
          <div className="dashboard__secondary_button">
            <Button
              title="Select/Unselect All"
              imgURL={selectImg}
              btnClass="btn--secondary-1"
            />
            <Button
              title="Delete Selected"
              imgURL={deleteImg}
              btnClass="btn--secondary-2"
            />
          </div>
        </div>
        <div className="dashboard__body">
          <table>
            <thead>
              <tr>
                <th>
                  Name{" "}
                  <img
                    src={sortImg}
                    alt="sort image"
                    className="table_sort__image"
                  />
                </th>
                <th>
                  Email Address{" "}
                  <img
                    src={sortImg}
                    alt="sort image"
                    className="table_sort__image"
                  />
                </th>
                <th>
                  Phone Number{" "}
                  <img
                    src={sortImg}
                    alt="sort image"
                    className="table_sort__image"
                  />
                </th>
                <th>
                  Status{" "}
                  <img
                    src={sortImg}
                    alt="sort image"
                    className="table_sort__image"
                  />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((data) => (
                <tr key={data?.id}>
                  <td>
                    <span className="users_action_checkbox">
                      <input type="checkbox" /> <span>{data?.name}</span>
                    </span>
                  </td>
                  <td>{data?.email}</td>
                  <td>{data?.phone}</td>
                  <td>{data?.username}</td>
                  <td className="dashboard__users_action">
                    Actions{" "}
                    <img
                      src={downarrowImg}
                      alt="sort image"
                      className="table_sort__image"
                    />
                    <div className="users_action">
                      <div className="users__action_item">
                        <img
                          src={viewdetailsImg}
                          alt="sort image"
                          className="table_sort__image"
                        />{" "}
                        <span className="users__action_title">
                          View Details
                        </span>
                      </div>
                      <div className="users__action_item ai--review">
                        <img
                          src={aireviewImg}
                          alt="sort image"
                          className="table_sort__image"
                        />{" "}
                        <span>AI Review</span>
                      </div>
                      <div className="users__action_item delete--action">
                        <img
                          src={deleteImg}
                          alt="sort image"
                          className="table_sort__image"
                        />{" "}
                        <span>Delete Client</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
