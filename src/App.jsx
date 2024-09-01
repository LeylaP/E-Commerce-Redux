import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <Loading />
        <Drawer open={true} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
