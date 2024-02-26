import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <section className="nav" id="navbar">
      <nav className="nav_container">
        <div>
          <a href="/" className="nav_link nav_logo ">
            <i className="fa-solid fa-bars nav_icon"></i>
            <span className="logo_name">
              <i className="fab fa-youtube"></i>
              Youtube
            </span>
          </a>

          <div className="nav_list">
            <div className="nav_items navtop">
              <a href="/" className="nav_link navtop active">
                <i className="fa fa-house nav_icon"></i>
                <span className="nav_name">Trang chủ</span>
              </a>

              <a href="/trending" className="nav_link navtop">
                <i className="fa-solid fa-music nav_icon"></i>
                <span className="nav_name">Nhạc thịnh hành</span>
              </a>

              <a href="#" className="nav_link navtop">
                <i className="fa-solid fa-users nav_icon"></i>
                <span className="nav_name">Cộng đồng</span>
              </a>

              <a href="#" className="nav_link navtop">
                <i className="fa-solid fa-bell nav_icon"></i>
                <span className="nav_name">Thông báo</span>
              </a>
              <a href="#" className="nav_link navtop">
                <i className="fa-solid fa-clock-rotate-left nav_icon"></i>
                <span className="nav_name">Video đã xem</span>
              </a>

              <a href="#" className="nav_link navtop">
                <i className="fa-solid fa-thumbs-up nav_icon"></i>
                <span className="nav_name">Video đã thích</span>
              </a>

              <a href="#" className="nav_link navtop">
                <i className="fa-solid fa-list nav_icon"></i>
                <span className="nav_name">Danh sách phát</span>
              </a>
            </div>

            <div className="nav_items subscribe-container">
              <h3 className="nav_subititle">chưa</h3>

              <a href="#" className="nav_link">
                <img
                  className="subscribe"
                  src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png"
                  alt=""
                ></img>
                <span className="nav_name">chưa</span>
              </a>
              <a href="#" className="nav_link">
                <img
                  className="subscribe"
                  src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png"
                  alt=""
                ></img>
                <span className="nav_name">chưa</span>
              </a>
              <a href="#" className="nav_link">
                <img
                  className="subscribe"
                  src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png"
                  alt=""
                ></img>
                <span className="nav_name">chưa</span>
              </a>

              <div className="nav_dropdown">
                <a href="#" className="nav_link">
                  <i className="fa-solid fa-chevron-down nav_icon"></i>
                  <span className="nav_name">Hiển thị thêm</span>
                </a>

                <div className="nav_dropdown-collapse nav_dropdown-second">
                  <div className="nav_dropdown-content">
                    <a href="#" className="nav_dropdown-items">
                      <img
                        className="subscribe"
                        src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                      />
                      <span className="nav_name">chưa</span>
                    </a>
                    <a href="#" className="nav_dropdown-items">
                      <img
                        className="subscribe"
                        src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                      />
                      <span className="nav_name">chưa</span>
                    </a>
                    <a href="#" className="nav_dropdown-items">
                      <img
                        className="subscribe"
                        src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                      />
                      <span className="nav_name">chưa</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default SideBar;
