import { Routes, Route } from "react-router-dom";
import Join from "../components/join.jsx";
import Search from "../components/search.jsx";
import { Grid } from "@mui/material"; 
import { grey } from "@mui/material/colors";
import Head from '../components/header/Head.jsx';
import SideBarMenu from '../components/sideBar/SideBarMenu.jsx'
import { useState, useEffect } from "react";

function Router() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // 너비가 900px 이상일 때 사이드바를 보이도록 설정
    const showSidebar = windowWidth > 900;
  
    const color = grey[50];
  
    return (
      <Grid container spacing={2} sx={{ height: '100vh' }}>
        {showSidebar && (
          <Grid item xs={3} lg={2} md={3}>
            <SideBarMenu />
          </Grid>
        )}
  
        <Grid item xs={showSidebar ? 9 : 12} lg={showSidebar ? 10 : 12} md={showSidebar ? 9 : 12} sx={{ backgroundColor: color }}>
          {/* 헤더 */}
          <Head />
  
          <Routes>
            <Route path="/join" element={<Join />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Grid>
      </Grid>
    );
  }
  
  export default Router;
